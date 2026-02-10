'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

const secretKey = process.env.JWT_SECRET || 'fallback-secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });
    return payload;
}

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Check database for admin user
    const { data: user, error } = await supabaseAdmin
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single();

    if (error || !user) {
        return { success: false, error: 'İstifadəçi tapılmadı və ya giriş icazəsi yoxdur.' };
    }

    // Verify password hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (isPasswordValid) {
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const session = await encrypt({
            email: user.email,
            id: user.id,
            name: user.full_name,
            expires
        });

        const cookieStore = await cookies();
        cookieStore.set('admin_session', session, {
            expires,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/'
        });

        return { success: true };
    }

    return { success: false, error: 'Şifrə yanlışdır.' };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.set('admin_session', '', {
        expires: new Date(0),
        path: '/'
    });
}

export async function getSession() {
    const session = (await cookies()).get('admin_session')?.value;
    if (!session) return null;
    try {
        return await decrypt(session);
    } catch (e) {
        return null;
    }
}
