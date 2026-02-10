import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'fallback-secret';
const key = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if it's an admin route, but NOT the login page itself
    if (pathname.includes('/admin') && !pathname.includes('/admin/login')) {
        const session = request.cookies.get('admin_session')?.value;

        if (!session) {
            // Redirect to login if no session
            const locale = pathname.split('/')[1] || 'az';
            return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url));
        }

        try {
            // Verify JWT
            await jwtVerify(session, key);
            return NextResponse.next();
        } catch (error) {
            // Invalid session
            const locale = pathname.split('/')[1] || 'az';
            return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
