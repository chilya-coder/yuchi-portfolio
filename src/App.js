import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="about" className="section section-hero">
          <AboutMe />
        </section>
        <section id="experience" className="section section-work">
          <Experience />
        </section>
        <section id="projects" className="section section-projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
