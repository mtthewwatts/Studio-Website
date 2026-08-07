import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="t-eyebrow hero__eyebrow">Personal Site</p>
        <h1 className="hero__name">Matthew Watts</h1>

        <div className="hero__cta">
          <Link href="/about" className="btn btn--filled">
            About
          </Link>
          <Link href="/projects" className="btn btn--outline">
            Projects
          </Link>
        </div>

        <div className="hero__image-wrap">
          <Image src="/hands.png" alt="" width={1400} height={900} priority />
        </div>
      </section>
    </main>
  );
}
