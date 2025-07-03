import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Materi from "./pages/Materi";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">日本語学習</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/materi">Materi</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/kontak">Kontak</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materi" element={<Materi />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-light text-center text-muted py-4 mt-5 border-top">
          <div>© {new Date().getFullYear()} BelajarBahasaJepang.com | Made with ❤️ for learners</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
