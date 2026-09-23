import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import profileImg from '../../assets/profile.webp';


export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className="hero">
            <div className="hero-text">
                <p className="hero-eyebrow">{t('hero.role')}</p>
                <h1>{t('hero.title1')} <em>{t('hero.title2')} <br className="hidden md:block" /> {t('hero.title3')}</em></h1>
                <p className="hero-bio">
                    {t('hero.description')}
                </p>
                <div className="hero-actions">
                    <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="btn-primary">{t('hero.hireMe')}</a>
                    <a href="https://github.com/myotunaungdev-pro" target="_blank" rel="noreferrer" className="btn-ghost">{t('hero.github')}</a>
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