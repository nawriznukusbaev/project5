import { Routes, Route, Link, useParams } from "react-router-dom";

const CERTIFICATES = [
  {
    id: "dilfuza",
    number: "AAT-B2-2026-0000-0631",
    name: "Dilfuza Bazarbayeva",
    dob: "23/02/2003",
    takenOn: "29/05/2024",
    validUntil: "28/05/2027",
    total: "68%",
    status: "PASSED",
    photo: "/Dilfuza.JPG",
  },
  {
    id: "mahmudbek",
    number: "AAT-B2-2026-0000-0549",
    name: "Mahmudbek Bakdurdiyev",
    dob: "24/03/1999",
    takenOn: "29/05/2024",
    validUntil: "28/05/2027",
    total: "68%",
    status: "PASSED",
    photo: "/Mahmudbek.jpg",
  },
  {
    id: "raxatsh",
    number: "AAT-B2-2026-0000-0576",
    name: "Raxat Sherniyazov",
    dob: "01/02/2002",
    takenOn: "29/05/2024",
    validUntil: "28/05/2027",
    total: "68%",
    status: "PASSED",
    photo: "/Raxat_Sh.JPG",
  },
  {
    id: "raxatv",
    number: "AAT-B2-2026-0000-0564",
    name: "Raxat Vapaev",
    dob: "31/08/2001",
    takenOn: "29/05/2024",
    validUntil: "28/05/2027",
    total: "68%",
    status: "PASSED",
    photo: "/Raxat_V.jpg",
  },
  {
    id: "erpolat",
    number: "AAT-B2-2026-0000-0532",
    name: "Erpolat Nizamatdinov",
    dob: "18/10/2003",
    takenOn: "29/05/2024",
    validUntil: "29/05/2027",
    total: "69%",
    status: "PASSED",
    photo: "/Erpolat.jpg",
  },
   {
    id: "nurqasim",
    number: "AAT-B2-2026-0000-0578",
    name: "Aldongarov Nurqasim",
    dob: "05/09/2001",
    takenOn: "29/05/2024",
    validUntil: "28/05/2027",
    total: "67%",
    status: "PASSED",
    photo: "/Nurqasim.jpg",
  }
];

const EXAM_NAME = "AL-ARABIYYA-TEST PRO B2";

function Row({ label, value, valueClass }) {
  return (
    <tr>
      <td
        style={{
          padding: "14px 16px",
          fontSize: 15,
          border: "1px solid #000",
          color: "#7a8291",
          width: "40%",
        }}
      >
        {label}
      </td>
      <td
        className={valueClass}
        style={{
          padding: "14px 16px",
          fontSize: 15,
          border: "1px solid #000",
          color: "#33394a",
        }}
      >
        {value}
      </td>
    </tr>
  );
}

function CertificateDetail() {
  const { id } = useParams();
  const cert = CERTIFICATES.find((c) => c.id === id);

  if (!cert) {
    return (
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "40px 24px",
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#1f2430",
          textAlign: "center",
        }}
      >
        <p>Certificate not found.</p>
        <Link to="/">← Back to list</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#1f2430",
      }}
    >


      <h1
        style={{
          fontSize: 28,
          fontWeight: 800,
          lineHeight: 1.25,
          margin: "0 0 24px",
          textAlign: "center",
        }}
      >
        Details about certificate №{cert.number}
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #000",
          marginBottom: 28,
          background: "#fff",
        }}
      >
        <tbody>
          <Row label="Exam name:" value={EXAM_NAME} />
          <Row label="Student name:" value={cert.name} />
          <Row label="Date of birth:" value={cert.dob} />
          <Row label="Taken on:" value={cert.takenOn} />
          <Row label="Valid until:" value={cert.validUntil} />
          <Row label="Total:" value={cert.total} />
          <Row
            label="Taking status:"
            value={
              <span style={{ color: "#3dbe20", fontWeight: 800, fontSize: 17 }}>
                {cert.status}
              </span>
            }
          />
        </tbody>
      </table>

      <img
        src={cert.photo}
        alt={cert.name}
        style={{
          width: 220,
          maxWidth: "100%",
          borderRadius: 4,
          display: "block",
        }}
      />
    </div>
  );
}

function CertificateList() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#1f2430",
      }}
    >
      <h1
        style={{
          fontSize: 24,
          fontWeight: 800,
          margin: "0 0 24px",
          textAlign: "center",
        }}
      >
        Certificate lookup
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {CERTIFICATES.map((cert) => (
          <Link
            key={cert.id}
            to={`/certificate/${cert.id}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 16px",
              border: "1px solid #000",
              background: "#fff",
              cursor: "pointer",
              textAlign: "left",
              fontSize: 15,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <span>
              <strong>{cert.name}</strong>
              <br />
              <span style={{ color: "#7a8291", fontSize: 13 }}>
                №{cert.number}
              </span>
            </span>
            <span style={{ color: "#3dbe20", fontWeight: 800 }}>
              {cert.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function CertificateApp() {
  return (
    <Routes>
      <Route path="/" element={<CertificateList />} />
      <Route path="/certificate/:id" element={<CertificateDetail />} />
    </Routes>
  );
}
