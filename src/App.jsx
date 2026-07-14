import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <Loader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Research />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
