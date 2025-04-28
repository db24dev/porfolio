import About from './sections/About.tsx';
import Clients from './sections/Clients.tsx';
import Contact from './sections/Contact.tsx';
import WorkExperience from './sections/Experience.tsx';
import Footer from './sections/Footer.tsx';
import Hero from './sections/Hero.tsx';
import Navbar from './sections/Navbar.tsx';
import Projects from './sections/Projects.tsx';

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
      <WorkExperience />
    </main>
  )
}

export default App
