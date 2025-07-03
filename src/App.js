import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Materi from "./pages/Materi";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">Belajar Jepang</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/materi">Materi</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/kontak">Kontak</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="container my-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materi" element={<Materi />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-light text-center py-3">
          <small>© {new Date().getFullYear()} BelajarBahasaJepang.com</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
