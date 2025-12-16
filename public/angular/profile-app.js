(function bootstrapAngularProfile() {
  function attemptBootstrap() {
    try {
      const ng = window.ng;
      if (!ng || !ng.core || !ng.platformBrowserDynamic || !ng.platformBrowser || !ng.common) {
        return false;
      }

      const { Component, NgModule } = ng.core;
      const { BrowserModule } = ng.platformBrowser;
      const { CommonModule } = ng.common;
      const { platformBrowserDynamic } = ng.platformBrowserDynamic;

      const AngularExperienceComponent = Component({
        selector: 'angular-experience-root',
        template: `
          <section class="angular-wrapper">
            <header class="angular-header">
              <h3>Testimonials & delivery principles</h3>
              <p>Rendered via Angular 17 using the UMD runtime embedded inside this Next.js site.</p>
            </header>
            <div class="angular-grid">
              <div class="angular-card" *ngFor="let testimonial of testimonials">
                <div class="angular-chip">{{ testimonial.role }}</div>
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.quote }}</p>
              </div>
              <div class="angular-card stack">
                <h4>Engagement blueprint</h4>
                <ul>
                  <li *ngFor="let pillar of pillars">
                    <span class="dot"></span>
                    <div>
                      <strong>{{ pillar.title }}</strong>
                      <p>{{ pillar.detail }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        `,
        styles: [`
          :host { display: block; width: 100%; }
          .angular-wrapper { display: grid; gap: 2rem; }
          .angular-header h3 { font-family: 'Poppins', sans-serif; font-size: 1.75rem; margin: 0 0 0.75rem; }
          .angular-header p { color: rgba(226, 232, 240, 0.8); margin: 0; }
          .angular-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
          .angular-card { background: rgba(13, 18, 46, 0.75); border: 1px solid rgba(148, 163, 184, 0.12); border-radius: 1.75rem; padding: 1.75rem; box-shadow: 0 10px 30px rgba(10, 21, 52, 0.35); }
          .angular-card h4 { font-size: 1.25rem; margin: 0.5rem 0; font-family: 'Poppins', sans-serif; }
          .angular-card p { color: rgba(226, 232, 240, 0.75); margin: 0; line-height: 1.6; }
          .angular-chip { display: inline-flex; align-items: center; padding: 0.35rem 0.75rem; border-radius: 9999px; border: 1px solid rgba(91, 141, 239, 0.5); background: rgba(91, 141, 239, 0.15); font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: #5b8def; }
          .stack ul { list-style: none; margin: 1rem 0 0; padding: 0; display: grid; gap: 1rem; }
          .stack li { display: grid; grid-template-columns: auto 1fr; gap: 0.9rem; align-items: start; }
          .stack p { margin: 0.35rem 0 0; color: rgba(226, 232, 240, 0.7); }
          .dot { display: inline-flex; width: 10px; height: 10px; border-radius: 9999px; background: #b0ff6a; margin-top: 0.4rem; }
          @media (max-width: 640px) {
            .angular-header h3 { font-size: 1.4rem; }
            .angular-grid { grid-template-columns: 1fr; }
          }
        `]
      })(
        class AngularExperienceComponent {
          testimonials = [
            {
              name: 'Leah Thompson',
              role: 'Director of Product, Nimbus Labs',
              quote: 'Ava layered React and Angular features seamlessly. Our release cadence accelerated without sacrificing quality.'
            },
            {
              name: 'Marco Ruiz',
              role: 'Engineering Manager, Pulse Health',
              quote: 'She turned requirements into resilient Angular modules and mentored the team through the migration.'
            },
            {
              name: 'Dana Patel',
              role: 'Design Lead, Atlas Studio',
              quote: 'Collaborating with Ava meant pixel-perfect execution and proactive accessibility coverage.'
            }
          ];

          pillars = [
            {
              title: 'Discovery sprints',
              detail: 'Map the risk landscape early, align KPIs, and build shared language across design and product.'
            },
            {
              title: 'Design system alignment',
              detail: 'Implement cross-framework tokens so React and Angular surfaces ship from the same source of truth.'
            },
            {
              title: 'Observability-first delivery',
              detail: 'Ship dashboards, performance guardrails, and experiment hooks with every release.'
            }
          ];
        }
      );

      const AngularExperienceModule = NgModule({
        declarations: [AngularExperienceComponent],
        imports: [BrowserModule, CommonModule],
        bootstrap: [AngularExperienceComponent]
      })(class AngularExperienceModule {});

      platformBrowserDynamic()
        .bootstrapModule(AngularExperienceModule)
        .then(() => {
          window.__ANGULAR_PROFILE_BOOTSTRAPPED__ = true;
          const host = document.querySelector('angular-experience-root');
          if (host) {
            host.removeAttribute('hidden');
          }
        })
        .catch(err => console.error('Angular bootstrap failed', err));

      return true;
    } catch (error) {
      console.error('Angular bootstrap error', error);
      return false;
    }
  }

  const readyStates = ['complete', 'interactive'];
  const init = () => {
    const success = attemptBootstrap();
    if (!success) {
      setTimeout(init, 150);
    }
  };

  if (readyStates.includes(document.readyState)) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
