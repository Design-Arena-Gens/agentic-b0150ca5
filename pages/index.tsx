import Head from 'next/head';
import AngularEmbed from '../components/AngularEmbed';
import ContactCard from '../components/ContactCard';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import ProfileTimeline from '../components/ProfileTimeline';
import ProjectGrid from '../components/ProjectGrid';
import SkillShowcase from '../components/SkillShowcase';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ava Martin · Front-end Developer (React & Angular)</title>
        <meta
          name="description"
          content="Portfolio site for Ava Martin, a front-end developer specializing in React and Angular. Explore projects, testimonials, and engagement workflows."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ava Martin · Front-end Developer" />
        <meta
          property="og:description"
          content="Three years of experience crafting resilient front-end architectures across React and Angular ecosystems."
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=968&q=80" />
      </Head>
      <div className="relative min-h-screen">
        <NavBar />
        <main>
          <Hero />
          <ProfileTimeline />
          <ProjectGrid />
          <SkillShowcase />
          <AngularEmbed />
          <ContactCard />
        </main>
        <Footer />
      </div>
    </>
  );
}
