import { EXPERIENCE } from '../constants/strings';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import '../styles/Experience.css';

function CompanyLogo({ company }) {
  return (
    <div className="company-logo" aria-hidden="true">
      <img
        src={`/logos/${company.toLowerCase()}.svg`}
        alt=""
        onError={e => {
          e.target.style.display = 'none';
          const fallback = e.target.nextElementSibling;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <span className="company-logo-fallback" style={{ display: 'none' }}>
        {company.charAt(0)}
      </span>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="experience">
      <div className="content-column">
        <header className="experience-header">
          <SectionLabel>work</SectionLabel>
          <h2>Work</h2>
        </header>

        <div className="experience-list">
          {EXPERIENCE.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.date}`}
              className="experience-entry"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <header className="experience-entry-header">
                <div className="experience-entry-title">
                  <CompanyLogo company={job.company} />
                  <div>
                    <h3>{job.role}</h3>
                    <p className="experience-company">{job.company}</p>
                  </div>
                </div>
                <time className="experience-date" dateTime={job.date}>
                  {job.date}
                </time>
              </header>
              <ul>
                {job.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
