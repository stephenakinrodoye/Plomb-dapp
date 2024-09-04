import { Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";

import LandingPage from "./pages/LandingPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import ContactUs from "./pages/ContactUs";
import Votes from "../src/pages/Votes";
import About from "./pages/About";
import Polls from "../src/pages/Polls";
import { Results } from "./pages/Results";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#252525", color: "white" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Vote" element={<Votes />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/About" element={<About />} />
          <Route path="/Polls" element={<Polls />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
