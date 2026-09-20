import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
    const [formStatus, setFormStatus] = useState({
        text: 'Transmit Message',
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
            text: 'Sending...',
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
                    text: 'Transmission Successful ✓',
                    disabled: true,
                    success: true
                });
                e.target.reset();

                setTimeout(() => {
                    setFormStatus({
                        text: 'Transmit Message',
                        disabled: false,
                        success: false
                    });
                }, 1500);

            }, (error) => {
                console.error('EmailJS Error:', error);
                setFormStatus({
                    text: 'Transmission Failed ✗',
                    disabled: false,
                    success: false
                });

                setTimeout(() => {
                    setFormStatus({
                        text: 'Transmit Message',
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
                    <h2 className="contact-heading">Initialize <em>Connection.</em></h2>
                    <p className="contact-sub">Available immediately for international contracts, remote full-stack workloads, and production integrations. Let's discuss your system architecture.</p>
                    <div className="contact-links">
                        <a href="mailto:mintaka.age21@gmail.com" className="contact-link">
                            <span className="contact-link-icon">//</span> mintaka.age21@gmail.com
                        </a>

                        <a href="https://github.com/mintaka21-engi" target="_blank" rel="noreferrer" className="contact-link">
                            <span className="contact-link-icon">//</span> github.com/mintaka21-engi
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
                    <div className="form-row">
                        <div className="form-field">
                            <label>Identity</label>
                            <input type="text" name="user_name" placeholder="Your name" required />
                        </div>
                        <div className="form-field">
                            <label>Endpoint</label>
                            <input type="email" name="user_email" placeholder="your@email.com" required />
                        </div>
                    </div>
                    <div className="form-field">
                        <label>System Requirements / Message</label>
                        <textarea rows="4" name="message" placeholder="Describe the system or project parameters…" required></textarea>
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