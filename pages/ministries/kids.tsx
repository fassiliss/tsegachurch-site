import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function KidsMinistry() {
  const kidsTeachers = [
    {
      name: "Dagem Samuel 1",
      role: "Kids Teacher",
      img: "/assets/images/kids/dagem.png",
      bio: "Passionate about teaching children about Jesus.",
    },
    {
      name: "Naomi Assefa 2",
      role: "Kids Teacher",
      img: "/assets/images/kids/naomi.png",
      bio: "Creating fun and engaging lessons for kids.",
    },
    {
      name: "Teacher Name 3",
      role: "Kids Teacher",
      img: "/assets/images/leaders/teacher3.png",
      bio: "Helping children grow in faith and love.",
    },
    {
      name: "Teacher Name 4",
      role: "Kids Teacher",
      img: "/assets/images/leaders/teacher4.png",
      bio: "Making Sunday school exciting and memorable.",
    },
  ];

  return (
    <>
      <Head>
        <title>Kid's Ministry / የሕፃናት አገልግሎት — Tsega Church</title>
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
            Kid's Ministry / የሕፃናት አገልግሎት
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
            The Kid's Ministry at Tsega Church provides a fun, safe, and
            engaging place for children to learn about God's love. Through
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

        {/* Kids Teachers Section */}
        <section style={{ padding: "40px 20px 60px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "40px",
            }}
          >

            Our Kids Teachers
          </h2>
          <div className="row justify-content-center">
            {kidsTeachers.map((teacher, i) => (
              <div key={i} className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 text-center shadow-sm border-0">
                  <div className="card-body">
                    <div
                      className="mx-auto mb-3"
                      style={{
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "4px solid #f0f0f0",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      <img
                        src={teacher.img}
                        alt={teacher.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h5 className="card-title">{teacher.name}</h5>
                    <p className="text-muted">{teacher.role}</p>
                    <p style={{ fontSize: "0.95rem" }}>{teacher.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
