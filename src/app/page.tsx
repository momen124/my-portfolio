import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import BlogStub from './components/BlogStub';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <BlogStub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}