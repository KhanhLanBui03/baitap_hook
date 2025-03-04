import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import RecipeBox from "./pages/RecipeBox";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <div className="d-flex flex-column min-vh-100 container-fluid">
      <Header onLoginClick={() => setShowLogin(true)} onNavigate={setPage} />
      <main className="flex-grow-1 p-4">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
        {page === "recipebox" && <RecipeBox />}
        {page === "admin" && <AdminLogin />}
      </main>
      <Footer />
      <LoginForm show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default App;