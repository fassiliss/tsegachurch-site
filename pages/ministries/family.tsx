import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function FamilyMinistry() {
  return (
    <>
      <Head>
        <title>Family Ministry / የቤተሰብ አገልግሎት — Tsega Church</title>
      </Head>
      <Header />

      <main className="theme_container">
        <div
          className="ministry-page"
          style={{ textAlign: "center", padding: "60px 20px" }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Family Ministry
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "#555",
            }}
          >
            The Family Ministry exists to strengthen marriages, nurture healthy
            homes, and equip parents to lead their families in faith. We believe
            the family is God’s design for teaching love, grace, and truth to
            the next generation.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Through Bible-based workshops, fellowship gatherings, and support
            groups, we provide encouragement and tools for families to thrive
            together in Christ. Whether you are newly married, raising children,
            or an empty nester — this ministry is for you.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
