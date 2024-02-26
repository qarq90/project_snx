import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-[100vw]" style={{color: 'var(--primary-theme-color)'}}>
            <h1 className="text-[10rem]">404</h1>
            <Link href="/" style={{textDecoration: 'underline'}}>Return Home</Link>
        </div>
    )
}