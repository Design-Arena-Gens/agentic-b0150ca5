const timeline = [
  {
    company: 'Nimbus Labs',
    title: 'Front-end Engineer',
    period: '2022 → Present',
    accomplishments: [
      'Led the migration of a mission-critical analytics surface from AngularJS to Angular 16.',
      'Introduced component contracts that reduced QA defects by 32%.',
      'Co-created a performance task force, pushing Core Web Vitals into the top 5% percentile.'
    ]
  },
  {
    company: 'Pulse Health',
    title: 'UI Engineer',
    period: '2021 → 2022',
    accomplishments: [
      'Delivered a React micro-frontend powering 120k+ daily appointments.',
      'Implemented accessibility auditing pipeline covering WCAG 2.1 AA.',
      'Partnered with design to launch a dark-mode system in six weeks.'
    ]
  },
  {
    company: 'Freelance',
    title: 'Front-end Specialist',
    period: '2020 → 2021',
    accomplishments: [
      'Shipped Angular dashboards for fintech startups in LATAM markets.',
      'Built design-adjacent prototypes in Figma + React Storybook.',
      'Mentored junior developers on idiomatic TypeScript patterns.'
    ]
  }
];

export default function ProfileTimeline() {
  return (
    <section id="experience" className="section-container py-24">
      <div className="mb-12 flex flex-col gap-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Experience</span>
        <h2 className="font-display text-3xl sm:text-4xl">Three years focused on resilient product delivery</h2>
        <p className="max-w-3xl text-lg text-slate-300">
          From refactoring legacy Angular monoliths to scaling React design systems, I blend rapid iteration with strong
          engineering fundamentals.
        </p>
      </div>
      <div className="space-y-8 border-l border-white/10 pl-6">
        {timeline.map(item => (
          <article key={item.company} className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
            <span className="absolute -left-[37px] top-8 h-4 w-4 rounded-full border-2 border-accent bg-midnight"></span>
            <header className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                {item.period}
              </span>
            </header>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">{item.company}</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {item.accomplishments.map(point => (
                <li key={point} className="flex gap-3 text-base">
                  <span className="mt-2 inline-block h-1 w-6 rounded-full bg-lime"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
