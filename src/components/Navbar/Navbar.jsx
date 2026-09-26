import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'mm' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <nav className="nav-container">
            <div className="nav-brand">
                <a href="#" className="nav-logo">Myo Tun Aung</a>
            </div>

            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#work" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.projects')}</a></li>
                    <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.about')}</a></li>
                    <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.contact')}</a></li>
                </ul>
            </div>

            <div className="nav-actions">
                <button className="lang-switcher" onClick={toggleLanguage}>
                    {i18n.language === 'en' ? 'MM' : 'EN'}
                </button>
                <button
                    className="hamburger-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
}