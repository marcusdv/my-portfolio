import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects'
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';

function App() {
    return <div>
        <Header />
        <Nav />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Testimonials />
        <Footer />
    </div>
};

export default App;