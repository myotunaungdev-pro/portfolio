import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="footer-inner">
                <p className="footer-copy">{t('footer.copy')}</p>
                <p className="footer-copy">{t('footer.status')}</p>
            </div>
        </footer>
    );
}