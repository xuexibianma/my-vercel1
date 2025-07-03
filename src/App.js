// src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h1 style={styles.title}>Belajar Bahasa Jepang</h1>
        <p style={styles.subtitle}>Mulai dari dasar hingga mahir dengan panduan terstruktur</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>📘 Materi</h2>
          <ul>
            <li>Hiragana & Katakana</li>
            <li>Kosakata & Kanji Dasar</li>
            <li>Grammar (Tata Bahasa)</li>
            <li>JLPT N5–N1</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>📝 Latihan</h2>
          <p>Interaktif kuis, latihan membaca, dan latihan menulis.</p>
        </section>

        <section style={styles.section}>
          <h2>🎯 Tujuan Kami</h2>
          <p>Membantu kamu belajar bahasa Jepang secara konsisten dan menyenangkan.</p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 BelajarBahasaJepang.com | Dibuat dengan ❤️ dan React</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#e63946',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    margin: 0
  },
  subtitle: {
    fontSize: '1.25rem',
    marginTop: '0.5rem'
  },
  main: {
    padding: '2rem'
  },
  section: {
    marginBottom: '2rem'
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '1rem',
    textAlign: 'center'
  }
};

export default App;
