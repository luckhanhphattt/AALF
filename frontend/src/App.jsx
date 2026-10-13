import Navbar from "./components/layout/Navbar.jsx";
import Info from "./pages/Info.jsx";
import Footer from "./components/layout/Footer.jsx";
import "./components/layout/nav_footer_query.css";
import Home from "./pages/Home.jsx"
function App() {
  return (<>
    <Navbar />
    <Home />
    <Footer />
  </>);
}

export default App;
