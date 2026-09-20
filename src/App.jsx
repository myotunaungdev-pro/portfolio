import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <hr className="divider" />
            <Projects />
            <hr className="divider" />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;