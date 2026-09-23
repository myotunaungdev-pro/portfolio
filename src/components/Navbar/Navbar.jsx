import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'mm' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <nav className="nav-container">
            <a href="#" className="nav-logo">Myo Tun Aung</a>
            <ul className="nav-links">
                <li><a href="#work">{t('navbar.projects')}</a></li>
                <li><a href="#about">{t('navbar.about')}</a></li>
                <li><a href="#contact">{t('navbar.contact')}</a></li>
                <li>
                    <button className="lang-switcher" onClick={toggleLanguage}>
                        {i18n.language === 'en' ? 'MM' : 'EN'}
                    </button>
                </li>
            </ul>
        </nav>
    );
}