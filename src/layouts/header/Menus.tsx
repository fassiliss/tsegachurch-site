// src/layouts/header/Menus.tsx
import Link from "next/link";

/* HOME MENUS */
export function Home() {
  return (
    <>
      <Link href="/">Home One</Link>
      <Link href="/index-2">Home Two</Link>
      <Link href="/index-3">Home Three</Link>
      <Link href="/index-4">Home Four</Link>
    </>
  );
}

/* PAGE MENUS */
export function Page() {
  return (
    <>
      <Link href="/about">About</Link>
      <Link href="/our-mission">Our Mission</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/404">404</Link>
    </>
  );
}

/* EVENT MENUS */
export function Event() {
  return (
    <>
      <Link href="/event">Event</Link>
      <Link href="/event-details">Event Details</Link>
      <Link href="/volunteer">Volunteer</Link>
    </>
  );
}

/* DONATION MENUS */
export function Donation() {
  return (
    <>
      <Link href="/donation-grid">Donation Grid</Link>
      <Link href="/donation-list">Donation List</Link>
      <Link href="/donation-details">Donation Details</Link>
    </>
  );
}

/* BLOG MENUS */
export function Blog() {
  return (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="/blog-details">Blog Details</Link>
    </>
  );
}

/* PORTFOLIO MENUS */
export function Portfolio() {
  return (
    <>
      <Link href="/gallery">Portfolio</Link>
    </>
  );
}

/* CONTACT MENU */
export function Contact() {
  return (
    <>
      <Link href="/contact">Contact</Link>
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
