import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function BibleStudyMinistry() {
  return (
    <>
      <Head>
        <title>Bible Study’s / የመጽሐፍ ቅዱስ ጥናት አገልግሎት — Tsega Church</title>
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
            Bible Study’s Ministry
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
            The Bible Study Ministry helps believers grow deeper in their
            understanding of God’s Word. Through weekly study sessions, group
            discussions, and personal reflection, members are encouraged to
            apply Scripture in everyday life.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: "30px auto 0",
              fontSize: "1.05rem",
              color: "#444",
            }}
          >
            Our goal is to build a strong foundation of faith rooted in the
            truth of the Bible. Everyone is welcome—whether you’re new to
            studying Scripture or have years of experience. Come join us as we
            grow together in knowledge and grace.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
