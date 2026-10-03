export const siteConfig = {
    social: {
        github: import.meta.env.VITE_GITHUB_URL || '',
        linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
        facebook: import.meta.env.VITE_FACEBOOK_URL || '',
        email: import.meta.env.VITE_CONTACT_EMAIL || ''
    }
};
