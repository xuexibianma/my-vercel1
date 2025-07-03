function Home() {
  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Belajar Bahasa Jepang</h1>
        <p className="lead text-muted">Mulai dari Hiragana hingga percakapan sehari-hari — gratis dan interaktif!</p>
        <a href="/materi" className="btn btn-primary btn-lg mt-3">Mulai Belajar</a>
      </div>

      {/* Fitur */}
      <div className="row text-center">
        <div className="col-md-4">
          <div className="mb-3"><i className="bi bi-journal-code fs-1 text-primary"></i></div>
          <h5>Materi Terstruktur</h5>
          <p>Kurikulum berdasarkan JLPT dan Genki/Minna no Nihongo.</p>
        </div>
        <div className="col-md-4">
          <div className="mb-3"><i className="bi bi-pencil-square fs-1 text-success"></i></div>
          <h5>Latihan Interaktif</h5>
          <p>Kuis, soal, dan latihan untuk semua level.</p>
        </div>
        <div className="col-md-4">
          <div className="mb-3"><i className="bi bi-people fs-1 text-danger"></i></div>
          <h5>Komunitas Belajar</h5>
          <p>Gabung bersama pelajar lain dan berbagi pengalaman.</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
