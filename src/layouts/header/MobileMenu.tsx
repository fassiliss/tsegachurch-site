// src/layouts/header/MobileMenu.tsx
import Link from "next/link";

type Props = { close: () => void };

export default function MobileMenu({ close }: Props) {
    return (
        <>
            <div className="menu-backdrop" onClick={close} />

            <aside className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile menu">
                <div className="menu-header">
                    <div className="logo">
                        <Link href="/" passHref>
                            <a onClick={close}>
                                <img src="/assets/images/logo-light.png" alt="Logo" />
                            </a>
                        </Link>
                    </div>

                    <button className="close-btn" aria-label="Close menu" onClick={close}>
                        ×
                    </button>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link href="/" passHref><a onClick={close}>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/about" passHref><a onClick={close}>About Us</a></Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref><a onClick={close}>Contact</a></Link>
                        </li>
                        <li>
                            <Link href="/members/register" passHref><a onClick={close}>Members Register</a></Link>
                        </li>
                        <li>
                            <Link href="/leaders" passHref><a onClick={close}>Leaders</a></Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
