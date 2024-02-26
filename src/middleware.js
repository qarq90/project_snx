import { NextResponse } from 'next/server'

export async function middleware(request) {
    const pathname = request.nextUrl.pathname
    if (pathname.includes('/auth')) {
        const cookie = request.cookies.get({
            name: "session",
        })
        if (cookie?.value === "true") {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return
    }
    if (!pathname.includes('/auth') && !pathname.includes('/api') && !pathname.includes('/images')) {
        const cookie = request.cookies.get({
            name: "session",
        })
        if (cookie?.value === "false") {
            return NextResponse.redirect(new URL('/auth', request.url))
        }
    }
    if (pathname.includes('/images/generated')) {
        console.clear()
        console.log('/IMAGES/GENERATED')
        return NextResponse.rewrite('/api' + pathname);
    }
}

export const config = {
    matcher: ['/auth/', '/account/:path*', '/create/:path*', '/contact/:path*', '/'],
}