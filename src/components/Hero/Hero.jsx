import React from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.webp';


export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <p className="hero-eyebrow">Full-Stack (MERN) &amp; AI Engineering Specialist</p>
                <h1>Engineering Scalable Systems with <em>Code &amp; Logic.</em></h1>
                <p className="hero-bio">
                    A disciplined developer focused on building robust web architectures and integrating AI solutions.
                    I don't just write code; I build systems that solve problems and drive progress.
                </p>
                <div className="hero-actions">
                    <a href="https://www.upwork.com/freelancers/~01993589e09ca8089c" target="_blank" rel="noreferrer" className="btn-primary">Hire on Upwork</a>
                    <a href="https://github.com/mintaka21-engi" target="_blank" rel="noreferrer" className="btn-ghost">View My GitHub</a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="profile-container">
                    <div className="profile-img-wrapper">
                        <img
                            src={profileImg}
                            alt="Profile of the Developer"
                            loading="lazy"
                            className="profile-img"
                        />
                    </div>
                </div>
                <div className="terminal-frame">
                    <div className="terminal-header">
                        <div className="terminal-btn"></div>
                        <div className="terminal-btn b2"></div>
                        <div className="terminal-btn b3"></div>
                    </div>
                    <div className="terminal-body">
                        <p className="cmd">$ npm run deploy --protocol=escape</p>
                        <p className="output">&gt; Optimizing system architecture...</p>
                        <p className="output">&gt; AI interfaces initiated.</p>
                        <p className="output">&gt; Status: Ready for global deployment.</p>
                    </div>
                </div>
                <div className="floating-tag tag-1">⚡ MERN Stack</div>
                <div className="floating-tag tag-2">🤖 LLM Integration</div>
                <div className="floating-tag tag-3">🌍 Global Remote</div>
            </div>
        </div>
    );
}