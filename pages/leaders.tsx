// pages/leaders.tsx
import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function LeadersPage() {
  const elders = [
    {
      name: "Henok Hailu",
      role: "Elder",
      img: "/assets/images/leaders/sample4.png",
      bio: "Faithful servant and mentor to the community.",
    },
    {
      name: "Daniel Mare",
      role: "Elder",
      img: "/assets/images/leaders/sample3.png",
      bio: "Guiding families and supporting discipleship.",
    },
    {
      name: "Tsegaab Woldekidan",
      role: "Elder",
      img: "/assets/images/leaders/sample7.png",
      bio: "Teaching the Word and equipping the next generation.",
    },
    {
      name: "Getachew Habte ",
      role: "Elder",
      img: "/assets/images/leaders/sample9.png",
      bio: "Passionate about prayer and pastoral care.",
    },
    {
      name: "Elder 5",
      role: "Elder",
      img: "/assets/images/leaders/sample8.png",
      bio: "Leading outreach and missions.",
    },
  ];

  const pastors = [
    {
      name: "Biniyam Tekle",
      role: "Pastor",
      img: "/assets/images/leaders/sample6.png",
      bio: "Preaching, vision, and leadership of Tsega Church.",
    },
    {
      name: "Feleke Urgecha",
      role: " Pastor",
      img: "/assets/images/leaders/sample5.png",
      bio: "Focused on youth ministry and discipleship.",
    },
  ];

  return (
    <>
      <Head>
        <title>Tsega Church — Leaders</title>
      </Head>
      <Header />

      <main className="theme_container" style={{ padding: "60px 20px" }}>
        <h1 className="text-center mb-5">Our Leaders</h1>

        {/* Elders Section */}
        <section className="mb-5">
          <h2 className="mb-4">Elders</h2>
          <div className="row">
            {elders.map((elder, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 text-center shadow-sm">
                  <img
                    src={elder.img}
                    alt={elder.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{elder.name}</h5>
                    <p className="text-muted">{elder.role}</p>
                    <p>{elder.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pastors Section */}
        <section>
          <h2 className="mb-4">Pastors</h2>
          <div className="row">
            {pastors.map((pastor, i) => (
              <div key={i} className="col-lg-6 col-md-6 mb-4">
                <div className="card h-100 text-center shadow-sm">
                  <img
                    src={pastor.img}
                    alt={pastor.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pastor.name}</h5>
                    <p className="text-muted">{pastor.role}</p>
                    <p>{pastor.bio}</p>
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
