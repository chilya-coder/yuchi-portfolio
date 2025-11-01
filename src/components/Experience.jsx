import { EXPERIENCE } from '../constants/strings';
import { motion } from 'framer-motion';
import {} from '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h1>Experience</h1>

        <div className="timeline">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-left">
                <div className="timeline-dot" />
                <div className="company-logo">
                  <img
                    src={`/logos/${job.company.toLowerCase()}.svg`}
                    alt={`${job.company} logo`}
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <span style={{ display: 'none' }}>
                    {job.company.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="timeline-content">
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <p className="date">{job.date}</p>

                <ul>
                  {job.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
