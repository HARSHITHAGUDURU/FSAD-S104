import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>My Website</h1>
      <ul style={styles.navLinks}>
        <li><Link style={styles.link} to="/">Home</Link></li>
        <li><Link style={styles.link} to="/login">Login</Link></li>
        <li><Link style={styles.link} to="/about">About</Link></li>
      </ul>
    </nav>
  );
}


 function Home() {
  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Welcome to the Home Page</h2>
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        This is a simple React site with navigation, multiple pages, and a modern look.
      </p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>🌐 Explore</h3>
          <p>Discover amazing content and features on our platform.</p>
        </div>
        <div style={styles.card}>
          <h3>🔐 Secure Login</h3>
          <p>Your security is our priority. Sign in safely to access your account.</p>
        </div>
        <div style={styles.card}>
          <h3>💡 Learn</h3>
          <p>We share tips and resources to help you grow your knowledge.</p>
        </div>
      </div>
    </div>
  );
}



function About() {
  return (
    <div style={styles.container}>
      <h2>About Us</h2>
      <p>We build small and beautiful websites using HTML, CSS, and JavaScript.</p>
    </div>
  );
}

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login form submitted!");
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input style={styles.input} type="text" placeholder="Username" required />
        <input style={styles.input} type="password" placeholder="Password" required />
        <button style={styles.button} type="submit">Sign In</button>
      </form>
    </div>
  );
}

const styles = {
  nav: {
    background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: { color: "white", fontSize: "20px" },
  navLinks: { display: "flex", listStyle: "none" },
  link: { color: "white", textDecoration: "none", marginLeft: "20px", fontWeight: "bold" },
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
  },
  form: { display: "flex", flexDirection: "column" },
  input: { margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" },
  button: {
    background: "#4e54c8",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
