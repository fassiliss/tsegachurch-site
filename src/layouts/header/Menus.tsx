import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home One</Link>
    </li>
    <li>
      <Link href="/index-2">Home Two</Link>
    </li>
    <li>
      <Link href="/index-3">Home Three</Link>
    </li>
    <li>
      <Link href="/index-4">Home Four</Link>
    </li>
  </Fragment>
);
export const Page = () => (
  <Fragment>
    <li>
      <Link href="/about">About</Link>
    </li>
    <li>
      <Link href="/our-mission">Our Mission</Link>
    </li>
    <li>
      <Link href="/event">Event</Link>
    </li>
    <li>
      <Link href="/event-details">Event Details</Link>
    </li>
    <li>
      <Link href="/volunteer">Volunteer</Link>
    </li>
    <li>
      <Link href="/faq">FAQ</Link>
    </li>
    <li>
      <Link href="/404">404</Link>
    </li>
  </Fragment>
);
export const Donation = () => (
  <Fragment>
    <li>
      <Link href="/donation-grid">Donation Grid</Link>
    </li>
    <li>
      <Link href="/donation-list">Donation List</Link>
    </li>
    <li>
      <Link href="/donation-details">Donation Details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog">Blog</Link>
    </li>
    <li>
      <Link href="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
export const Portfolio = () => (
  <li>
    <Link href="/gallery">Portfolio</Link>
  </li>
);
export const Contact = () => (
  <li>
    <Link href="/contact">Contact</Link>
  </li>
);
