import { FC } from 'react';
import './App.scss';
import About from './layout/About/About';
import Experiences from './layout/Experiences/Experiences';
import Header from './layout/Header/Header';
import Hero from './layout/Hero/Hero';
import Footer from './layout/Footer/Footer';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <About />
            <Experiences />
            <Footer />
        </div>
    );
};

export default App;
