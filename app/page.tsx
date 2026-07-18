import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="t-eyebrow hero__eyebrow">Technologist + Creative</p>
        <h1 className="hero__name">Matthew Watts</h1>

        <div className="hero__cta">
          <Link href="/projects" className="btn btn--filled">
            Projects
          </Link>
          <Link href="/biography" className="btn btn--outline">
            About
          </Link>
        </div>

        <div className="hero__image-wrap">
          {/* Drop hands.png into /public — see README */}
          <Image src="/hands.png" alt="" width={1400} height={900} priority />
        </div>
      </section>

      <Footer />
    </main>
  );
}
