import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

export default function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    if (e.target.classList.contains('skill-pill')) {
                        e.target.classList.add('is-visible');
                    } else {
                        e.target.style.opacity = '1';
                        e.target.style.transform = 'translateY(0)';
                    }
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.05 });

        if (aboutRef.current) {
            // Animate value items
            const items = aboutRef.current.querySelectorAll('.value-item');
            items.forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(16px)';
                el.style.transition = `opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`;
                observer.observe(el);
            });

            // Animate skill pills
            const skillPills = aboutRef.current.querySelectorAll('.skill-pill');
            skillPills.forEach((el, i) => {
                el.style.setProperty('--anim-delay', `${i * 0.05 + 0.1}s`);
                observer.observe(el);
            });
        }

        return () => observer.disconnect();
    }, []);

    const { t } = useTranslation();

    const skillCategories = [
        {
            title: t('about.skills.frontend'),
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Bootstrap", "Responsive Web Design"]
        },
        {
            title: t('about.skills.backend'),
            skills: ["Node.js", "Express.js", "MongoDB"]
        },
        {
            title: t('about.skills.apis'),
            skills: ["RESTful API Integration", "Stripe", "Git", "GitHub"]
        },
        {
            title: t('about.skills.ai'),
            skills: ["Gemini AI", "Python"]
        }
    ];

    return (
        <section id="about" ref={aboutRef}>
            <div className="about-layout">
                <div>
                    <p className="section-label">{t('about.sectionLabel')}</p>
                    <h2 className="section-title">{t('about.sectionTitle')}</h2>
                    <p className="section-sub">
                        {t('about.sectionSub')}
                    </p>

                    <div className="skills-container">
                        {skillCategories.map((category, idx) => (
                            <div className="skill-category" key={idx}>
                                <h4 className="skill-category-title">{category.title}</h4>
                                <div className="skillList-wrap">
                                    {category.skills.map((skill, sIdx) => (
                                        <span className="skill-pill" key={sIdx}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-values">
                    <div className="value-item">
                        <div className="value-dot">01</div>
                        <div className="value-text">
                            <strong>{t('about.value1Title')}</strong>
                            <p>{t('about.value1Desc')}</p>
                        </div>
                    </div>
                    <div className="value-item">
                        <div className="value-dot">02</div>
                        <div className="value-text">
                            <strong>{t('about.value2Title')}</strong>
                            <p>{t('about.value2Desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}