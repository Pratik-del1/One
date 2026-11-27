
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Heart,
  Sparkles
} from 'lucide-react'

const BASE = import.meta.env.BASE_URL

const PERSONALIZE = {
  herName: 'my love',
  yourName: 'Pratik',
  anniversary: 'our special day',
  note: "I’m sorry I forgot our anniversary. I know that a date can look like just another square on a calendar, but to me it holds a memory that means so much more. You deserved to feel remembered, celebrated and loved without having to remind me. I can’t undo the moment, and I don’t want to make excuses for it. I can only own my mistake, tell you how much you mean to me, and do better in the ways that matter."
}

const memories = [
  {
    number: '01',
    title: 'My favourite kind of together',
    text: 'This picture is a little reminder that even an ordinary moment becomes special when I get to share it with you. I’m sorry I let our anniversary pass without making you feel celebrated. You deserved that joy, and so much more.',
    image: `${BASE}images/memory-01.jpg`,
    alt: 'A happy selfie together outdoors'
  },
  {
    number: '02',
    title: 'The person behind my smile',
    text: 'Look at you. I hope you never forget how lovely you are, inside and out. I should never need a date on a calendar to remind me to appreciate you. I’m sorry I fell short when it mattered.',
    image: `${BASE}images/memory-02.png`,
    alt: 'A portrait of her smiling'
  },
  {
    number: '03',
    title: 'A little world of our own',
    text: 'This is one of those moments I want to keep close. Thank you for the laughter, the warmth and all the little memories we keep making. I can’t change the day I forgot, but I can be more thoughtful from here on.',
    image: `${BASE}images/memory-03.png`,
    alt: 'A close selfie together'
  }
]

const floaters = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 8) % 100}%`,
  delay: (i % 7) * 0.7,
  duration: 9 + (i % 5) * 2,
  size: 10 + (i % 4) * 5
}))

function FloatingHearts() {
  return (
    <div className="floating-layer" aria-hidden="true">
      {floaters.map((f, i) => (
        <motion.span
          key={i}
          className="floating-heart"
          style={{ left: f.left, fontSize: f.size }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-15vh',
            opacity: [0, 0.45, 0.35, 0],
            rotate: [0, 15, -12, 0]
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}

function GlassButton({ children, onClick }) {
  return (
    <button className="glass-button" onClick={onClick}>
      {children}
    </button>
  )
}

function SurpriseVideo({ type }) {
  const isForgiven = type === 'yes'

  const videoSrc = isForgiven
    ? `${BASE}videos/dancing.mp4`
    : `${BASE}videos/apology.mp4`

  return (
    <motion.div
      className="video-surprise glass"
      initial={{ opacity: 0, y: 25, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="video-surprise-icon">
        {isForgiven ? '🥹❤️' : '💌'}
      </div>

      <h3>
        {isForgiven
          ? 'WAITTT YOU FORGAVE ME 😭❤️'
          : 'I UNDERSTAND, MY LOVE ❤️'}
      </h3>

      <p>
        {isForgiven
          ? 'Okay now please witness the happiest man alive'
          : 'I respect that. But I still have one little thing I want to tell you'}
      </p>

      <video
        key={videoSrc}
        className="surprise-video"
        src={videoSrc}
        controls
        playsInline
        preload="metadata"
      >
        Your browser does not support HTML video.
      </video>

      <span className="video-caption">
        {isForgiven
          ? 'A little celebration just for you'
          : 'A message straight from my heart'}
      </span>
    </motion.div>
  )
}

export default function App() {
  const [opened, setOpened] = useState(false)
  const [answer, setAnswer] = useState('')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <main>
      <FloatingHearts />

      {/* Navigation */}
      <nav className="nav glass">
        <a className="brand" href="#home">
          <span className="brand-heart">♥</span>
          a little love note
        </a>

        <span className="nav-caption">
          made with all my heart
        </span>

        <div className="sound-pill">
          <Sparkles size={15} />
          <span>just for you</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero section" id="home">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="eyebrow">
            <span />
            A NOTE FROM MY HEART
            <span />
          </div>

          <h1>
            Some things
            <br />
            deserve <em>more</em>
            <br />
            than a text.
          </h1>

          <p className="hero-copy">
            So I made you a little corner of the internet.
            <br />
            Just for you. Just to say I’m sorry.
          </p>

          <motion.div
            className="envelope-wrap"
            whileHover={{ y: -7, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 180 }}
          >
            <div className={`envelope ${opened ? 'is-open' : ''}`}>
              <div className="envelope-letter">
                <Heart fill="currentColor" size={23} />
                <span>for you</span>
              </div>
              <div className="envelope-back" />
              <div className="envelope-front" />
              <div className="envelope-flap" />
              <div className="wax-seal">
                <Heart size={22} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          <GlassButton
            onClick={() => {
              setOpened(true)
              setTimeout(() => scrollTo('apology'), 650)
            }}
          >
            {opened ? 'Read my little letter' : 'Open your letter'}
            <ArrowRight size={17} />
          </GlassButton>

          <div className="tiny-hint">
            <span className="pulse-dot" />
            there’s something I want you to know
          </div>
        </motion.div>

        <div className="hero-side-note">
          TO THE PERSON WHO MAKES LIFE LOVELIER <span>✳</span>
        </div>

        <button
          className="scroll-cue"
          onClick={() => scrollTo('apology')}
          aria-label="Scroll down"
        >
          <ArrowDown size={18} />
        </button>
      </section>

      {/* Apology letter */}
      <section className="apology section" id="apology">
        <div className="section-kicker">
          01 / THE IMPORTANT PART
        </div>

        <div className="apology-grid">
          <motion.div
            className="apology-heading"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="script-label">
              first, let me say…
            </span>

            <h2>
              I’m truly
              <br />
              <em>sorry.</em>
            </h2>

            <div className="heart-line">
              <span />
              <Heart size={16} fill="currentColor" />
              <span />
            </div>

            <p className="small-note">
              No excuses. No little asterisks.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {opened ? (
              <motion.div
                className="letter-card glass"
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.65 }}
              >
                <div className="card-top">
                  <span>
                    ✳ A LETTER FOR {PERSONALIZE.herName.toUpperCase()}
                  </span>
                  <span>♡</span>
                </div>

                <p className="letter-greeting">
                  Hey, {PERSONALIZE.herName},
                </p>

                <p>{PERSONALIZE.note}</p>

                <p className="letter-signoff">
                  With love, always
                </p>

                <div className="signature">
                  {PERSONALIZE.yourName}
                </div>

                <div className="letter-stamp">
                  <Heart fill="currentColor" size={18} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="letter-locked glass"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="locked-heart">
                  <Heart size={25} fill="currentColor" />
                </div>

                <p className="letter-greeting">
                  A little letter is waiting for you
                </p>

                <p>
                  It will open when you tap
                  <strong> “Open your letter” </strong>
                  on the first screen.
                </p>

                <button
                  className="soft-answer"
                  onClick={() => scrollTo('home')}
                >
                  Take me to the envelope ↑
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Memories */}
      <section className="memories section" id="memories">
        <div className="section-kicker">
          02 / A FEW THINGS I ADORE
        </div>

        <div className="center-heading">
          <span className="script-label">
            little reminders
          </span>

          <h2>
            It’s always been
            <br />
            <em>the little things.</em>
          </h2>

          <p>
            And there are a million of them I never want
            to take for granted.
          </p>
        </div>

        <div className="memory-grid">
          {memories.map((m, i) => (
            <motion.article
              className={`memory-card memory-${i + 1}`}
              key={m.number}
              initial={{
                opacity: 0,
                y: 30,
                rotate: i % 2 ? 2 : -2
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="memory-art">
                <img src={m.image} alt={m.alt} />

                <span className="memory-number">
                  {m.number}
                </span>
              </div>

              <div className="memory-copy">
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="photo-tip">
          <Sparkles size={14} />
          Three little memories, a million more to make.
        </p>
      </section>

      {/* Promise */}
      <section className="promise section">
        <div className="promise-inner">
          <div className="section-kicker">
            03 / WHAT I WANT YOU TO KNOW
          </div>

          <motion.div
            className="promise-heart"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Heart fill="currentColor" size={42} />
          </motion.div>

          <h2>
            You matter on
            <br />
            <em>every</em> day.
          </h2>

          <p>
            Not just anniversaries. Not just birthdays.
            Not only when the calendar reminds me.
            You deserve thoughtfulness in the everyday,
            and I want my actions to say that as clearly
            as my words do.
          </p>

          <div className="promise-ornament">
            ✳ &nbsp; ♡ &nbsp; ✳
          </div>
        </div>
      </section>

      {/* Interactive question and videos */}
      <section className="question section" id="question">
        <div className="section-kicker">
          04 / ONE LITTLE QUESTION
        </div>

        <motion.div
          className="question-card glass"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="script-label">
            when you’re ready…
          </span>

          <h2>
            Can I make it
            <br />
            <em>up to you?</em>
          </h2>

          <p>
            No pressure, no rush. I just want the chance
            to make you feel as special as you are to me.
          </p>

          <div className="answer-actions">
            <GlassButton onClick={() => setAnswer('yes')}>
              I forgive you
              <Heart size={16} fill="currentColor" />
            </GlassButton>

            <button
              className="soft-answer"
              onClick={() => setAnswer('time')}
            >
              I need a little time
            </button>
          </div>

          <AnimatePresence mode="wait">
            {answer && (
              <SurpriseVideo key={answer} type={answer} />
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer section">
        <div className="footer-flower">✿</div>

        <span className="script-label">
          one last thing…
        </span>

        <h2>
          Still choosing
          <br />
          <em>you.</em>
        </h2>

        <p>
          Today, tomorrow, and in all the little
          moments in between.
        </p>

        <div className="footer-signature">
          {PERSONALIZE.yourName}
        </div>

        <div className="footer-bottom">
          <span>MADE WITH LOVE, NOT AN EXCUSE</span>
          <span>
            ♡ &nbsp; {PERSONALIZE.anniversary} &nbsp; ♡
          </span>
        </div>
      </footer>
    </main>
  )
}
