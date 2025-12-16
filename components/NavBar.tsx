import Link from 'next/link';

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-midnight/70 border-b border-white/10">
      <nav className="section-container flex items-center justify-between py-4">
        <Link href="#top" className="font-display text-xl tracking-wide flex items-center gap-2">
          <span className="h-3 w-3 bg-lime rounded-full animate-pulse"></span>
          Ava Martin
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(link => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-lime transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-accent/60 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/20"
        >
          Available for hire
        </Link>
      </nav>
    </header>
  );
}
