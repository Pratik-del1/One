# A Little Love, A Little Sorry

A romantic, responsive apology website built with React, Vite, Framer Motion and CSS glass effects.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Personalize before deploying

Open `src/App.jsx` and edit the `PERSONALIZE` object near the top:

- `herName`: her name or nickname
- `yourName`: your name
- `anniversary`: the anniversary date or a phrase you use together
- `note`: the main apology in your own words

Replace the sample memory cards with your own photos:
1. Put image files in `public/images/`.
2. Update the `image` values in the `memories` array to `/images/your-photo.jpg`.
3. Add alt text that describes each photo.

The site works without photos; it uses elegant gradient placeholders instead.

## Build for deployment

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy

### Netlify
- Push this folder to GitHub.
- In Netlify, choose **Add new site → Import an existing project**.
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Import the GitHub repository into Vercel.
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages
For a project repository, set Vite's `base` option in `vite.config.js` to `'/YOUR-REPOSITORY-NAME/'`, then build and deploy `dist` using GitHub Pages.

## Notes
- No backend or API key is required.
- The interactive buttons are intentionally pressure-free: the response is hers to choose.
- Google Fonts are loaded from Google Fonts; system fallbacks are included.


## Included photos
Your three supplied photos are already included in `public/images/` and wired into the memories gallery. The apology letter stays hidden until the visitor clicks **Open your letter** on the first screen.
