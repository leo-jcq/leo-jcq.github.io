import { FC } from 'react';
import './App.scss';
import Header from './layout/Header/Header';
import Hero from './layout/Hero/Hero';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
        </div>
    );
};

export default App;
