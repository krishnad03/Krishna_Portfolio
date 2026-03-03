# Digital Westeros Portfolio

Cinematic Game-of-Thrones-inspired portfolio for Krishna using:

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- Vercel deployment target

## Run locally

```bash
npm install
npm run dev
```

## Contact Form (Gmail)

The `Send the Raven` form uses a backend API route and sends emails through Gmail SMTP.

1. Copy `.env.example` to `.env.local`
2. Set:
   - `GMAIL_USER` (your Gmail address)
   - `GMAIL_APP_PASSWORD` (Google App Password, not your normal password)
   - `CONTACT_RECEIVER_EMAIL` (optional receiver, defaults to `GMAIL_USER`)
3. Restart `npm run dev`

## Structure

- `app/`
- `components/`
- `sections/`
- `assets/`
- `styles/`
- `public/`
- `hooks/`
- `utils/`

## Audio assets

Add these files in `public/audio/`:

- `ambient-medieval.mp3`
- `sword-hover.mp3`
- `fire-ignite.mp3`
- `dragon-roar.mp3`

## Resume asset

Replace `public/assets/krishna-resume.pdf` placeholder with your final PDF.
