import "./navbar.css";
import franceFlag from "../../assets/images/france_flag.png";
import {NavLink} from "react-router-dom";

function Navbar() {
      return (
            <nav className="navbar">
            <div className="website_identity">
                  <img src={franceFlag} alt="French flag"/>
                  <p className="name">AALF</p>
            </div>
            <hr className="line" />

            <div className="general-list">
            <ul className="dropdown-list">
                  <li className="nav-item">
                        <NavLink className="nav-button" to="/" end>Home</NavLink>
                  </li>

                  <li className="nav-item">
                        <a className="nav-button">Lesson</a>
                        <ul className="dropdown-menu">
                              <li>
                                    <NavLink to="/grammar">Grammar</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/vocabulary">Vocabulary</NavLink>
                              </li>
                        </ul>
                  </li>

                  <li className="nav-item">
                        <a className="nav-button">Practice</a>
                        <ul className="dropdown-menu">
                              <li>
                                    <NavLink to="/reading">Reading</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/writing">Writing</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/listening">Listening</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/speaking">Speaking</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/exams">Exams</NavLink>
                              </li>
                        </ul>
                  </li>

                  <li className="nav-item">
                        <a className="nav-button">More</a>
                        <ul className="dropdown-menu">
                              <li>
                                    <a href="#">Info</a>
                              </li>

                              <li>
                                    <NavLink to="/aboutus">About Us</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/helpfaq">Help & FAQ</NavLink>
                              </li>
                        </ul>
                  </li>
            </ul>

            <ul className="right-list">
                  <li>

                  </li>

                  <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bell-icon">
                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                        </svg>

                  </li>

                  <li>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="menu-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                  </li>
            </ul>
            </div>
      </nav>
      );
}

export default Navbar;