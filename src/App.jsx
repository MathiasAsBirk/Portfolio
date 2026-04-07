import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
