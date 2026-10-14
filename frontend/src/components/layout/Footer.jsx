import franceFlag from "../../assets/images/france_flag.png";
import "./footer.css";

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
                        <a className="footer-element">Grammar</a>
                        <a className="footer-element">Vocabulary</a>
                        <a className="footer-element">Exams</a>
                  </div>
                  
                  <div className="footer-more">
                        <h5>More</h5>
                        <a className="footer-element">Info</a>
                        <a className="footer-element">Help & FAQ</a>
                        <a className="footer-element">About Us</a>
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
