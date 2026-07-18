import PageHero from '@/components/PageHero';
import CVExperienceRow from '@/components/CVExperienceRow';
import Footer from '@/components/Footer';
import { CV_EDUCATION, CV_EXPERIENCE } from '@/lib/content';

export default function CVPage() {
  return (
    <main className="page">
      <div className="cv">
        <PageHero
          title="CV"
          headingSize="small"
          descriptionEmphasis
          descriptionCentered
        >
          A collection of information that would typically be found in my resume or my
          &lsquo;Curriculum Vitae&rsquo; (CV).
        </PageHero>

        <section className="cv__section cv__section--centered">
          <p className="t-eyebrow">{CV_EDUCATION.eyebrow}</p>
          <div className="cv-entry">
            <div className="cv-entry__role">
              <h3 className="cv-entry__title">{CV_EDUCATION.degree}</h3>
              <p className="t-body cv-entry__org">{CV_EDUCATION.note}</p>
            </div>
            <div className="cv-entry__meta">
              <p className="cv-entry__location cv-entry__location--strong">{CV_EDUCATION.school}</p>
              <p className="t-body cv-entry__dates">
                {CV_EDUCATION.location}
                <br />
                {CV_EDUCATION.dateRange}
              </p>
            </div>
          </div>
        </section>

        <div className="cv__divider" />

        <section className="cv__section">
          <p className="t-eyebrow">Relevant Experience</p>
          <div className="cv__experience-list">
            {CV_EXPERIENCE.map((entry, i) => (
              <div key={`${entry.role}-${entry.dateRange}`}>
                <CVExperienceRow {...entry} />
                {i < CV_EXPERIENCE.length - 1 && <div className="cv__divider" />}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
