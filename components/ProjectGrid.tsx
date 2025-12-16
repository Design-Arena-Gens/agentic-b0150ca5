import Link from 'next/link';

const projects = [
  {
    name: 'Aurora Analytics Platform',
    description: 'Modular data exploration suite with collaborative dashboards and reactive drilldowns.',
    stack: ['Next.js', 'GraphQL', 'TailwindCSS'],
    result: 'Raised retention by 18% with faster insights for product managers.'
  },
  {
    name: 'PulseCare Clinics',
    description: 'Multi-tenant booking experience with HIPAA compliant workflows and offline resilience.',
    stack: ['Angular 16', 'RxJS', 'Nx'],
    result: 'Scaled to 2.4M monthly sessions while meeting rigorous accessibility standards.'
  },
  {
    name: 'Atlas Design System',
    description: 'Token-driven component library powering 6 teams with consistent brand expression.',
    stack: ['Storybook', 'React', 'Figma API'],
    result: 'Cut feature delivery time by 23% through unified UI primitives.'
  }
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="section-container py-24">
      <div className="mb-12 flex flex-col gap-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Projects</span>
        <h2 className="font-display text-3xl sm:text-4xl">Selected product collaborations</h2>
        <p className="max-w-3xl text-lg text-slate-300">
          Focused on products that merge craftsmanship with measurable impact. Each engagement layered strategic UX
          thinking, disciplined code reviews, and iterative experimentation.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map(project => (
          <article key={project.name} className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <h3 className="font-display text-2xl">{project.name}</h3>
              <p className="mt-3 text-slate-200">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-accent">
              {project.stack.map(chip => (
                <span key={chip} className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1">
                  {chip}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-400">{project.result}</p>
            <Link
              href="#contact"
              className="mt-auto text-sm font-semibold text-accent hover:text-lime"
            >
              Schedule a case study walkthrough →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
