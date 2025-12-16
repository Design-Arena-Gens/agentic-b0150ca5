const skills = [
  {
    title: 'React Architecture',
    summary: 'Hooks, Suspense-ready data flows, server components, and testable UI contracts.',
    highlights: ['Custom render pipelines', 'Performance instrumentation', 'Accessibility-first reviews']
  },
  {
    title: 'Angular Engineering',
    summary: 'Standalone components, RxJS orchestration, and comprehensive module governance.',
    highlights: ['NgRx data domains', 'Angular Elements bridges', 'Strict template linting']
  },
  {
    title: 'Design Collaboration',
    summary: 'Systems thinking across tokens, motion, and inclusive interaction patterns.',
    highlights: ['Design handoff QA', 'Storybook/Chromatic automation', 'Figma component audits']
  }
];

export default function SkillShowcase() {
  return (
    <section id="skills" className="section-container py-24">
      <div className="mb-12 flex flex-col gap-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Skill stack</span>
        <h2 className="font-display text-3xl sm:text-4xl">Engineering depth across modern front-end ecosystems</h2>
        <p className="max-w-3xl text-lg text-slate-300">
          Equal parts React pragmatist and Angular strategist. I combine typed codebases, robust testing harnesses, and
          collaborative tooling to ship reliable product experiences.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {skills.map(skill => (
          <article key={skill.title} className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8">
            <header>
              <h3 className="font-display text-2xl">{skill.title}</h3>
              <p className="mt-3 text-slate-300">{skill.summary}</p>
            </header>
            <ul className="mt-auto space-y-3 text-sm text-slate-200">
              {skill.highlights.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-lime"></span>
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
