const data = [
  { title: "Hiragana", desc: "Belajar huruf Jepang dasar." },
  { title: "Katakana", desc: "Huruf untuk kata serapan." },
  { title: "Kanji Dasar", desc: "Memahami 100+ Kanji umum." },
  { title: "Grammar N5", desc: "Struktur dasar kalimat." },
];

function Materi() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Daftar Materi</h2>
      <div className="row">
        {data.map((m, i) => (
          <div key={i} className="col-md-3">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{m.title}</h5>
                <p className="card-text">{m.desc}</p>
                <a href="#" className="btn btn-sm btn-outline-primary">Lihat</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Materi;
