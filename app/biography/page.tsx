import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

export default function BiographyPage() {
  return (
    <main className="page">
      <div className="biography">
        <PageHero title="Biography" />

        <div className="biography__body">
          <div className="biography__text">
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

          <div className="biography__portrait">
            {/* Drop a headshot at /public/portrait.jpg and swap the src below */}
            <div className="biography__portrait-frame" />
          </div>
        </div>

        <div className="biography__gallery">
          {/* Drop photos into /public and reference them here — three placeholders for now */}
          <div className="biography__gallery-item" />
          <div className="biography__gallery-item" />
          <div className="biography__gallery-item" />
        </div>

        {/* Optional extra section — add more biography content here if you want it,
            or delete this block entirely. */}
        <p className="t-body biography__extra">
          Add any additional biography content here — more about your interests, how you
          got into engineering, what you&rsquo;re working on next, etc. Delete this
          paragraph if you don&rsquo;t need it.
        </p>
      </div>

      <Footer />
    </main>
  );
}
