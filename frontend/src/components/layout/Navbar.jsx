import "./navbar.css";
import "./navbar_query.css";
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
                                    <NavLink to="/info">Info</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/aboutus">About Us</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/helpfaq">Help & FAQ</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/collection">Collection</NavLink>
                              </li>

                              <li>
                                    <NavLink to="/discover">Discover</NavLink>
                              </li>
                        </ul>
                  </li>
            </ul>

            <ul className="right-list">
                  <li className="right-nav-item">
                        <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bell-icon">
                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                        </svg></a>
                        <ul className="right-dropdown-menu">
                              <li><p>A new publication has just been added on article. Read now!!!</p></li>
                        </ul>

                  </li>

                  <li className="right-nav-item">
                       <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="menu-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg></a>
                        <ul className="menu-profile">
                              <li className="avatar">
                                    <span className="fullname">Full name</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="avatar-image">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                    </svg>
                              </li>
                              <li className="profile-option">
                                    <p className="title"><NavLink className="navlink" to="/setting">Settings</NavLink></p>
                              </li> 
                              <li className="profile-option">
                                    <p className="title"><NavLink className="navlink" to="/dashboard">Dashboard</NavLink></p>
                              </li> 
                              <li className="profile-option">
                                    <p className="logout title">Log out</p>
                              </li> 
                        </ul>
                  </li>
            </ul>
            </div>
      </nav>
      );
}


export default Navbar;