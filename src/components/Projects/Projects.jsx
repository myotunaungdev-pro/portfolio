import React, { useEffect, useRef } from 'react';
import projectData from '../../data/projects.json';
import './Projects.css';

export default function Projects() {
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.05 });

        if (gridRef.current) {
            const cards = gridRef.current.querySelectorAll('.work-card');
            cards.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="work">
            <p className="section-label">Selected Projects</p>
            <h2 className="section-title">Production-Ready Deployments</h2>
            <p className="section-sub">A calculated selection of systems designed to showcase scalability, architectural integrity, and automated intelligence.</p>

            <div className="work-grid" ref={gridRef}>
                {projectData.map((project, idx) => (
                    <div 
                        className="work-card" 
                        key={project.id}
                        style={{ '--animation-order': idx }}
                    >
                        <div className="tech-stack-container">
                            {project.techStack?.map((tech) => (
                                <span className="tech-badge" key={tech}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="work-title">{project.title}</h3>
                        <p className="work-desc">{project.description}</p>
                        
                        <div className="project-links">
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                    GitHub
                                </a>
                            )}
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}