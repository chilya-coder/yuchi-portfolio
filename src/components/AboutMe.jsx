import Typewriter from 'typewriter-effect';
import { PERSONAL_INFO, TYPEWRITER_CONFIG } from '../constants/strings';

export default function AboutMe() {
  return (
    <section className="about-me">
      <img src="/yuchi.jpeg" alt="Yuchi profile" className="profile-photo" />
      <div className="about-text">
        <h1>{PERSONAL_INFO.greeting}</h1>
        <h2>
          I'm{' '}
          <Typewriter
            options={{
              strings: PERSONAL_INFO.titles,
              ...TYPEWRITER_CONFIG,
            }}
          />
        </h2>
        <p>{PERSONAL_INFO.description}</p>
        <p className="joke">{PERSONAL_INFO.joke}</p>
      </div>
    </section>
  );
}
