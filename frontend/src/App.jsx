import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import "./components/layout/nav_footer_query.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    <Footer />
  </>);
}

export default App;
