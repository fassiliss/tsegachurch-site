// src/layouts/header/Menus.tsx
import Link from "next/link";

/* HOME MENUS */
export function Home() {
    return (
        <>
            <Link href="/"><a>Home One</a></Link>
            <Link href="/index-2"><a>Home Two</a></Link>
            <Link href="/index-3"><a>Home Three</a></Link>
            <Link href="/index-4"><a>Home Four</a></Link>
        </>
    );
}

/* PAGE MENUS */
export function Page() {
    return (
        <>
            <Link href="/about"><a>About</a></Link>
            <Link href="/our-mission"><a>Our Mission</a></Link>
            <Link href="/faq"><a>FAQ</a></Link>
            <Link href="/404"><a>404</a></Link>
        </>
    );
}

/* EVENT MENUS */
export function Event() {
    return (
        <>
            <Link href="/event"><a>Event</a></Link>
            <Link href="/event-details"><a>Event Details</a></Link>
            <Link href="/volunteer"><a>Volunteer</a></Link>
        </>
    );
}

/* DONATION MENUS */
export function Donation() {
    return (
        <>
            <Link href="/donation-grid"><a>Donation Grid</a></Link>
            <Link href="/donation-list"><a>Donation List</a></Link>
            <Link href="/donation-details"><a>Donation Details</a></Link>
        </>
    );
}

/* BLOG MENUS */
export function Blog() {
    return (
        <>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/blog-details"><a>Blog Details</a></Link>
        </>
    );
}

/* PORTFOLIO MENUS */
export function Portfolio() {
    return (
        <>
            <Link href="/gallery"><a>Portfolio</a></Link>
        </>
    );
}

/* CONTACT MENU */
export function Contact() {
    return (
        <>
            <Link href="/contact"><a>Contact</a></Link>
        </>
    );
}

/* DEFAULT EXPORT (optional, safe to keep) */
export default function Menus() {
    return (
        <>
            <Home />
            <Page />
            <Event />
            <Donation />
            <Blog />
            <Portfolio />
            <Contact />
        </>
    );
}
