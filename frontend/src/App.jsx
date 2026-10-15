import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import "./components/layout/nav_footer_query.css";
import Home from "./pages/Home.jsx";
import Grammar from "./pages/Grammar.jsx";
import Vocabulary from "./pages/Vocabulary.jsx";
import Reading from "./pages/Reading.jsx";
import Listening from "./pages/Listening.jsx";
import Writing from "./pages/Writing.jsx";
import Speaking from "./pages/Speaking.jsx";
import Exam from "./pages/Exam.jsx";
import Info from "./pages/Info.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Help_FAQ from "./pages/Help_FAQ.jsx";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grammar" element={<Grammar />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
      <Route path="/reading" element={<Reading />} />
      <Route path="/listening" element={<Listening />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/info" element={<Info />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/helpfaq" element={<Help_FAQ />} />
    </Routes>
    <Footer />
  </>);
}

export default App;
