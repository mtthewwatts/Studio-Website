import Image from 'next/image';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  return (
    <main className="page">
      <div className="about">
        <PageHero title="About" />

        <div className="about__body">
          <div className="about__text">
            <p className="t-body">
              I&rsquo;m Matthew Watts (b. 2004, Northern Ontario, Canada), a fourth year
              Engineering Student at the University of Waterloo. I have a background in
              Mechanical and Electrical Design through previous roles in manufacturing,
              automation, and research. I&rsquo;m looking to bridge into embedded systems
              design for consumer-facing products for my next experience!
            </p>
            <p className="t-body">
              I spend my personal time working in student advocacy and leadership,
              exploring my interest of the intersection between art + tech and working at
              becoming a triathlete (swimming is my downfall 😔).
            </p>
          </div>

          <div className="about__portrait">
            <div className="about__portrait-frame">
              <Image src="/portrait.png" alt="Matthew Watts" fill sizes="160px" />
            </div>
          </div>
        </div>

        <div className="about__gallery">
          <div className="about__gallery-item">
            <Image
              src="/about-speaking.png"
              alt="Presenting the 3B Line Follower Robot"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="about__gallery-item__img--face"
            />
          </div>
          <div className="about__gallery-item">
            <Image
              src="/about-heatscan.png"
              alt="Thermal camera reading from a lab session"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="about__gallery-item">
            <Image
              src="/about-essco.png"
              alt="Getting helmeted at the ESSCO conference"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
