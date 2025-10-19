import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function KidsMinistry() {
  return (
    <>
      <Head>
        <title>Kid’s Ministry — Tsega Church</title>
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
            Kid’s Ministry
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
            The Kid’s Ministry at Tsega Church provides a fun, safe, and
            engaging place for children to learn about God’s love. Through
            creative Bible lessons, worship, and activities, kids discover who
            Jesus is and how much He cares for them.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Our dedicated volunteers help children grow spiritually while
            building friendships and developing a strong foundation of faith. We
            believe kids are not just the future of the church — they are an
            essential part of it today.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
