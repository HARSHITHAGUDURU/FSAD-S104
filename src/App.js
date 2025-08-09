import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>Percentage Calculator</h2>
        <div>
          <button style={styles.navButton} onClick={() => setPage("home")}>
            Home
          </button>
          <button style={styles.navButton} onClick={() => setPage("calculator")}>
            Calculator
          </button>
        </div>
      </nav>

      {/* Pages */}
      <div style={styles.pageWrapper}>
        <div style={styles.page}>
          {page === "home" ? <HomePage /> : <CalculatorPage />}
        </div>
      </div>
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div style={styles.card}>
      <h1>Welcome to the Percentage Calculator</h1>
      <p>
        This tool helps you quickly find out your percentage by entering your
        marks obtained and the total marks.
      </p>
      <p>
        Whether you’re a student tracking your grades, a teacher calculating
        results, or just someone curious about percentage math — this calculator
        is simple, fast, and accurate.
      </p>
      <ul style={{ textAlign: "left", marginTop: "15px" }}>
        <li>✅ Instant calculation</li>
        <li>✅ Easy to use</li>
        <li>✅ Works on any device</li>
      </ul>
      <p style={{ marginTop: "15px" }}>
        Click on the <b>Calculator</b> page in the menu to get started!
      </p>
    </div>
  );
}

// Calculator Page Component
function CalculatorPage() {
  const [marks, setMarks] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    if (marks === "" || total === "" || total === "0") {
      setResult("⚠ Please enter valid numbers");
      return;
    }
    let percentage = (parseFloat(marks) / parseFloat(total)) * 100;
    setResult(percentage.toFixed(2) + "%");
  };

  return (
    <div style={styles.card}>
      <h2>Percentage Calculator</h2>
      <input
        style={styles.input}
        type="number"
        placeholder="Marks Obtained"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <input
        style={styles.input}
        type="number"
        placeholder="Total Marks"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <button style={styles.calcButton} onClick={calculatePercentage}>
        Calculate
      </button>
      {result && <h3 style={{ marginTop: "15px" }}>Result: {result}</h3>}
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f6fa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2f3640",
    padding: "10px 20px",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  navButton: {
    backgroundColor: "#40739e",
    border: "none",
    padding: "8px 15px",
    margin: "0 5px",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  pageWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "450px",
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px auto",
    display: "block",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    textAlign: "center",
  },
  calcButton: {
    backgroundColor: "#44bd32",
    border: "none",
    padding: "10px 15px",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default App;
