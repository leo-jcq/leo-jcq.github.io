import './App.scss';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import EmailRail from './components/layout/EmailRail';
import Experience from './components/layout/Experience';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Projects from './components/layout/Projects';
import SocialRail from './components/layout/SocialRail';

function App() {
    return (
        <div className="app">
            <Header />

            <SocialRail />
            <EmailRail />

            <main className="app__main">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
