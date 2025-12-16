# Ava Martin · Front-end Developer Portfolio

Production-grade portfolio for a front-end developer with three years of experience delivering React and Angular applications.

## Tech Stack

- Next.js 13 (pages directory) + TypeScript
- Tailwind CSS for utility-first styling
- Angular 17 UMD bundle mounted as a micro-app for testimonials
- Deployed-ready configuration for Vercel

## Local Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Project Highlights

- React-driven hero, experience, project, skills, and contact sections tailored to a 3-year front-end specialist.
- Angular-based testimonial spotlight embedded via Angular Elements-style bootstrap using the UMD runtime.
- Responsive, accessible design emphasizing product impact, delivery metrics, and collaboration style.
- Ready for Vercel deployment (`npm run build` + `vercel deploy --prod`).

## Deployment

Deploy with the provided Vercel token:

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b0150ca5
```

## License

MIT © 2024 Ava Martin Portfolio
