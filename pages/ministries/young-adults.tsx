import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function YoungAdultsMinistry() {
  return (
    <>
      <Head>
        <title>Young Adults Ministry — Tsega Church</title>
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
            Young Adults Ministry
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
            The Young Adults Ministry at Tsega Church is a vibrant community of
            believers in their 20s and 30s pursuing Christ together. We exist to
            help young adults grow in faith, build authentic relationships, and
            live purposefully in every area of life.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Through small groups, worship nights, service projects, and social
            gatherings, we create a space where faith meets real life. Whether
            you’re a student, working professional, or newly married, you’ll
            find belonging, encouragement, and opportunities to serve.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
