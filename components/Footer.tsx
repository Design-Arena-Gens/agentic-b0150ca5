import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-10">
      <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-display text-2xl">Ava Martin</h3>
          <p className="text-sm text-slate-400">Crafting resilient interfaces with React, Angular, and TypeScript.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <Link href="mailto:ava.martin.dev@example.com" className="hover:text-lime">
            Email
          </Link>
          <Link href="https://github.com" className="hover:text-lime">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-lime">
            LinkedIn
          </Link>
          <Link href="https://dev.to" className="hover:text-lime">
            Writing
          </Link>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Ava Martin. All rights reserved.</p>
      </div>
    </footer>
  );
}
