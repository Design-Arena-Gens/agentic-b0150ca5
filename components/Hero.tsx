import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-accent/20 via-midnight to-midnight blur-3xl opacity-70"></div>
      <div className="section-container flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
            Front-end developer · React & Angular
          </span>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Crafting polished interfaces with a product mindset and production-grade code.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            I&apos;m Ava Martin, a front-end engineer with three years of experience building high-impact web platforms. I blend
            React&apos;s flexibility with Angular&apos;s structure to deliver cohesive user experiences that scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:ava.martin.dev@example.com"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-midnight shadow-glow transition hover:bg-lime"
            >
              Book a discovery call
            </Link>
            <Link
              href="#projects"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-lime/60"
            >
              View latest work
            </Link>
          </div>
          <dl className="grid gap-5 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            {[{ key: 'Production releases', value: '12+' }, { key: 'A/B tests shipped', value: '35' }, { key: 'Team velocity boost', value: '28%' }].map((stat, index) => (
              <div key={stat.key} className="flex flex-col sm:px-4">
                <dt className="text-sm uppercase tracking-wide text-slate-400">{stat.key}</dt>
                <dd className="font-display text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=968&q=80"
                alt="Portrait of Ava Martin"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Design systems</span>
                <span className="font-semibold text-lime">Enterprise-ready</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Performance budget</span>
                <span className="font-semibold text-lime"><span className="text-slate-400">LCP</span> &lt; 1.8s</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Core stack</span>
                <span className="font-semibold text-lime">React · Angular · TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
