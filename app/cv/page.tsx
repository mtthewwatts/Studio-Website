import PageHero from '@/components/PageHero';
import CVExperienceRow from '@/components/CVExperienceRow';
import { CV_EDUCATION, CV_EXPERIENCE } from '@/lib/content';

export default function CVPage() {
  return (
    <main className="page">
      <div className="cv">
        <PageHero title="CV" descriptionEmphasis descriptionFullWidth>
          Information that would be found on my CV or Resume.
        </PageHero>

        <section className="cv__section cv__section--education">
          <p className="t-eyebrow">{CV_EDUCATION.eyebrow}</p>
          <div className="cv-entry cv-entry--education">
            <div className="cv-entry__role">
              <h3 className="cv-entry__degree">{CV_EDUCATION.degree}</h3>
              <p className="t-body cv-entry__note">{CV_EDUCATION.note}</p>
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
          <div className="cv__divider" />
        </section>

        <section className="cv__section cv__section--roles">
          <p className="t-eyebrow">Highlighted Roles</p>
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
    </main>
  );
}
