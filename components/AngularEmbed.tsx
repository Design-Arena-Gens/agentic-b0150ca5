import { useEffect, useState } from 'react';

export default function AngularEmbed() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const isAngularReady = typeof window !== 'undefined' && (window as any).__ANGULAR_PROFILE_BOOTSTRAPPED__;
      if (isAngularReady) {
        setReady(true);
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-container py-24">
      <div className="mb-12 flex flex-col gap-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Angular spotlight</span>
        <h2 className="font-display text-3xl sm:text-4xl">Production-tested Angular orchestration</h2>
        <p className="max-w-3xl text-lg text-slate-300">
          This section is rendered through an Angular 17 micro-app bootstrapped as a web component. It highlights
          testimonial signals and delivery playbooks directly from recent Angular engagements.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
        {!ready && (
          <div className="flex items-center justify-center py-16 text-slate-400">
            Loading Angular experience insights...
          </div>
        )}
        <angular-experience-root class="block" hidden={!ready}></angular-experience-root>
      </div>
    </section>
  );
}
