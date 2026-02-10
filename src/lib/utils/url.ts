export const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') return 'https://bond.az';
    if (typeof window !== 'undefined') return window.location.origin;
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
};

export const getBrandName = () => {
    return 'Bond.az';
};
