export const getBaseUrl = () => {
    // Client-side: use current origin
    if (typeof window !== 'undefined') return window.location.origin;

    // Production environment check
    const isProd = process.env.NODE_ENV === 'production' ||
        process.env.VERCEL_ENV === 'production' ||
        process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

    if (isProd) return 'https://bond.az';

    // Local development
    if (process.env.NODE_ENV === 'development') return 'http://localhost:3000';

    // Preview/Vercel environments (if not production)
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

    return 'https://bond.az'; // Default to production for safety
};
export const getBrandName = () => {
    return 'Bond.az';
};
