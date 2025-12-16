import Link from 'next/link';

export default function ContactCard() {
  return (
    <section id="contact" className="section-container py-24">
      <div className="grid gap-12 rounded-3xl border border-white/10 bg-gradient-to-br from-accent/20 via-midnight to-midnight p-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Let&apos;s collaborate</span>
          <h2 className="font-display text-3xl sm:text-4xl">Bring purposeful polish to your next release</h2>
          <p className="max-w-2xl text-lg text-slate-200">
            From early discovery spikes to mature design system governance, I partner with teams to build performant,
            inclusive, and maintainable web applications.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              📍 Remote · San Diego, CA
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              🚀 React, Angular, TypeScript
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              🤝 Contract or full-time
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-display text-xl">Start a project</h3>
            <p className="mt-3 text-sm text-slate-300">
              Share a brief about your roadmap, target milestones, and stack. I&apos;ll respond within 24 hours.
            </p>
            <Link
              href="mailto:ava.martin.dev@example.com"
              className="mt-5 inline-flex items-center rounded-full bg-lime px-5 py-3 font-semibold text-midnight hover:bg-lime/80"
            >
              ava.martin.dev@example.com
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <p>
              Prefer async updates? Follow my engineering notes on
              <Link href="https://dev.to" className="ml-1 font-semibold text-accent hover:text-lime">
                dev.to
              </Link>
              &nbsp;or connect on
              <Link href="https://www.linkedin.com" className="ml-1 font-semibold text-accent hover:text-lime">
                LinkedIn
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
