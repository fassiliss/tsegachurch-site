// src/layouts/header/MobileMenu.tsx
import Link from "next/link";

type Props = { close: () => void };

export default function MobileMenu({ close }: Props) {
  return (
    <>
      {/* Backdrop */}
      <div className="menu-backdrop" onClick={close} />

      {/* Panel */}
      <aside
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="menu-header">
          <div className="logo">
            <Link href="/" onClick={close}>
              <img src="/assets/images/logo-light.png" alt="Logo" />
            </Link>
          </div>
          <button className="close-btn" aria-label="Close menu" onClick={close}>
            ×
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/" onClick={close}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={close}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={close}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/members/register" onClick={close}>
                Members Register
              </Link>
            </li>
            <li>
              <Link href="/leaders" onClick={close}>
                Leaders
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
