import { FC } from 'react';
import './App.scss';
import About from './layout/About/About';
import Header from './layout/Header/Header';
import Hero from './layout/Hero/Hero';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <About />
        </div>
    );
};

export default App;
