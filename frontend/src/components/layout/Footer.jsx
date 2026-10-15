import franceFlag from "../../assets/images/france_flag.png";
import "./footer.css";
import "./footer_query.css";
import {NavLink} from "react-router-dom";

function Footer() {
      return (
            <footer className="footer-part">
                  <div className="total-left">
                        <div className="footer-identity">
                              <img className="frenchflag" src={franceFlag} />
                              <p className="footer-name">AALF</p>
                        </div>
                        <p className="footer-slogan">"Parlez Français, Vivez Français"</p>
                        <div className="footer-media">
                              <img className="app-icon" alt="instagram" src="https://img.icons8.com/color/48/instagram-new--v1.png"/>
                              <img className="app-icon" alt="facebook" src="https://img.icons8.com/color/48/facebook-new.png"/>
                        </div>
                  </div>
                  
                  <div className="footer-learning">
                        <h5>Learning</h5>
                        <NavLink className="footer-element" to="/grammar">Grammar</NavLink>
                        <NavLink className="footer-element" to="/vocabulary">Vocabulary</NavLink>
                        <NavLink className="footer-element" to="exams">Exams</NavLink>
                  </div>
                  
                  <div className="footer-more">
                        <h5>More</h5>
                        <NavLink className="footer-element" to="info">Info</NavLink>
                        <NavLink className="footer-element" to="helpfaq">Help & FAQ</NavLink>
                        <NavLink className="footer-element" to="aboutus">About Us</NavLink>
                  </div>
                  <div className="footer-intouch">
                        <h5>Get in touch</h5>
                        <div className="footer-email">
                              <p className="email">Email: aalf@français.com</p>
                              <p>&copy; 2026 AALF, All rights reserved.</p>
                              <a>Privacy Policy</a>
                        </div>
                  </div>
            </footer>
      );
}

export default Footer;
