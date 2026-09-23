import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
    const { t } = useTranslation();
    const [formStatus, setFormStatus] = useState({
        text: t('contact.form.btnTransmit'),
        disabled: false,
        success: false
    });

    const formRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.05 });

        if (formRef.current) {
            formRef.current.style.opacity = '0';
            formRef.current.style.transform = 'translateY(16px)';
            formRef.current.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            observer.observe(formRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormStatus({
            text: t('contact.form.btnSending'),
            disabled: true,
            success: false
        });

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setFormStatus({
                    text: t('contact.form.btnSuccess'),
                    disabled: true,
                    success: true
                });
                e.target.reset();

                setTimeout(() => {
                    setFormStatus({
                        text: t('contact.form.btnTransmit'),
                        disabled: false,
                        success: false
                    });
                }, 1500);

            }, (error) => {
                console.error('EmailJS Error:', error);
                setFormStatus({
                    text: t('contact.form.btnFailed'),
                    disabled: false,
                    success: false
                });

                setTimeout(() => {
                    setFormStatus({
                        text: t('contact.form.btnTransmit'),
                        disabled: false,
                        success: false
                    });
                }, 1500);
            });
    };

    return (
        <div className="contact-section" id="contact">
            <div className="contact-inner">
                <div>
                    <h2 className="contact-heading">{t('contact.heading1')} <em>{t('contact.heading2')}</em></h2>
                    <p className="contact-sub">{t('contact.sub')}</p>
                    <div className="contact-links">
                        <a href="mailto:myotunaung.dev@gmail.com" className="contact-link">
                            <span className="contact-link-icon">//</span> myotunaung.dev@gmail.com
                        </a>

                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
                            <span className="contact-link-icon">//</span> linkedin.com
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
                    <div className="form-row">
                        <div className="form-field">
                            <label>{t('contact.form.identity')}</label>
                            <input type="text" name="user_name" placeholder={t('contact.form.namePlaceholder')} required />
                        </div>
                        <div className="form-field">
                            <label>{t('contact.form.endpoint')}</label>
                            <input type="email" name="user_email" placeholder={t('contact.form.emailPlaceholder')} required />
                        </div>
                    </div>
                    <div className="form-field">
                        <label>{t('contact.form.messageLabel')}</label>
                        <textarea rows="4" name="message" placeholder={t('contact.form.messagePlaceholder')} required></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`btn-send ${formStatus.success ? 'btn-success' : ''}`}
                        disabled={formStatus.disabled}
                    >
                        {formStatus.text}
                    </button>
                </form>
            </div>
        </div>
    );
}