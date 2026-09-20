import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.05 });

        if (aboutRef.current) {
            const items = aboutRef.current.querySelectorAll('.value-item');
            items.forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(16px)';
                el.style.transition = `opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`;
                observer.observe(el);
            });
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        "MongoDB", "Express.js", "React", "Node.js",
        "JavaScript (ES6+)", "AI API Integration",
        "RESTful APIs", "Git/GitHub", "Technical English"
    ];

    return (
        <section id="about" ref={aboutRef}>
            <div className="about-layout">
                <div>
                    <p className="section-label">Executive Summary</p>
                    <h2 className="section-title">Articulating my journey from a resilient self-learner to a systems architect.</h2>
                    <p className="section-sub">
                        Driven by a legacy of integrity and a mission to support my family, I execute every project with the precision of a Future Engineer.
                    </p>
                    <div className="skills-wrap">
                        {skills.map((skill, idx) => (
                            <span className="skill-pill" key={idx}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="about-values">
                    <div className="value-item">
                        <div className="value-dot">01</div>
                        <div className="value-text">
                            <strong>Architecture Over Syntax</strong>
                            <p>Frameworks change, but system properties like reliability, clean interfaces, and computational scaling remain constants. I build with structural integrity first.</p>
                        </div>
                    </div>
                    <div className="value-item">
                        <div className="value-dot">02</div>
                        <div className="value-text">
                            <strong>Deterministic Execution</strong>
                            <p>I thrive on execution and deadlines. Whether configuring validation layers or prompt engineering loops, logic runs exactly as engineered.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}