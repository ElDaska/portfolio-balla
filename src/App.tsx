import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import QRCode from "./pages/Card";
import WelcomeAnimation from "./components/WelcomeAnimation";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      {showWelcome && <WelcomeAnimation onComplete={() => setShowWelcome(false)} />}

      <div className="min-h-screen bg-[#0B1120] text-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/card" element={<QRCode />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
