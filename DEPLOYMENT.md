# Vercel Deployment Steps

1. Push this project to a GitHub repository.
2. Sign in to Vercel and click **Add New Project**.
3. Import the repository.
4. Keep defaults:
   - Framework: Next.js
   - Build command: `next build`
   - Output: `.next`
5. Add environment variables only if needed later.
6. Deploy.
7. On each push to `main`, Vercel will auto-deploy updates.

## Post Deploy Checklist

1. Verify initiation flow and transition timing.
2. Verify audio files exist in `public/audio`.
3. Confirm resume download link works.
4. Test mobile and desktop scroll animations.
