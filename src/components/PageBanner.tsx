// src/components/PageBanner.tsx
import Link from "next/link";

interface PageBannerProps {
    pageName: string;
    pageTitle?: string;
    subtitle?: string;
}

const PageBanner = ({ pageName, pageTitle, subtitle }: PageBannerProps) => {
    return (
        <section
            className="page-title"
            style={{
                backgroundImage: "url(/assets/images/resource/bg-page-title2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                padding: "160px 0 90px", // prevents header overlap
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                color: "#fff",
            }}
        >
            <div className="theme_container">
                <h1 style={{ fontSize: "2.8rem", fontWeight: 700, marginBottom: 10 }}>
                    {pageTitle || pageName}
                </h1>

                {subtitle && (
                    <p
                        style={{
                            fontSize: "1.1rem",
                            opacity: 0.9,
                            maxWidth: "700px",
                            margin: "0 auto 15px",
                        }}
                    >
                        {subtitle}
                    </p>
                )}

                <ul
                    className="bread-crumb"
                    style={{
                        display: "flex",
                        gap: 8,
                        justifyContent: "center",
                        fontSize: "1rem",
                        marginTop: 10,
                    }}
                >
                    <li>
                        <Link href="/" legacyBehavior>
                            <a style={{ color: "#fff" }}>Home</a>
                        </Link>
                    </li>

                    <li style={{ opacity: 0.7 }}>/ {pageName}</li>
                </ul>
            </div>
        </section>
    );
};

export default PageBanner;
