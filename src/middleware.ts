import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'fallback-secret';
const key = new TextEncoder().encode(secretKey);

const locales = ['en', 'tr', 'az'];
const defaultLocale = 'az';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Locale Handling
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        // Redirect to default locale if missing
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        );
    }

    // 2. Admin Authentication
    if (pathname.includes('/admin') && !pathname.includes('/admin/login')) {
        const session = request.cookies.get('admin_session')?.value;

        if (!session) {
            const locale = pathname.split('/')[1] || defaultLocale;
            return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url));
        }

        try {
            await jwtVerify(session, key);
            return NextResponse.next();
        } catch (error) {
            const locale = pathname.split('/')[1] || defaultLocale;
            return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
