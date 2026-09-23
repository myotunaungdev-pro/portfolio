import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import projectData from '../../data/projects.json';
import './Projects.css';

export default function Projects() {
    const gridRef = useRef(null);
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';

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
            <p className="section-label">{t('projects.sectionLabel')}</p>
            <h2 className="section-title">{t('projects.sectionTitle')}</h2>
            <p className="section-sub">{t('projects.sectionSub')}</p>

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

                        {/* Separated Name and Type instead of using a single Title */}
                        <div className="work-header">
                            <h3 className="work-name">{project.name[currentLang]}</h3>
                            <span className="work-type">{project.type[currentLang]}</span>
                        </div>

                        <p className="work-desc">{project.description[currentLang]}</p>

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