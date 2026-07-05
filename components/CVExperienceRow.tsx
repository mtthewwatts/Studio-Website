import type { CVExperience } from '@/lib/content';

export default function CVExperienceRow({ role, org, location, dateRange, description }: CVExperience) {
  return (
    <div className="cv-entry">
      <div className="cv-entry__role">
        <h3 className="cv-entry__title">{role}</h3>
        <p className="t-body cv-entry__org">{org}</p>
      </div>

      <div className="cv-entry__meta">
        <p className="cv-entry__location">{location}</p>
        <p className="t-body cv-entry__dates">{dateRange}</p>
      </div>

      <p className="t-body cv-entry__description">{description}</p>
    </div>
  );
}
