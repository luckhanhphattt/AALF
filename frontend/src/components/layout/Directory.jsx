import "./Directory.css";
import {NavLink} from "react-router-dom";

function Directory({currentName, currentPath, currentClassName}) {
      return (<div className="directory">
            <NavLink className="home-button" to="/" end>Home</NavLink>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow-right">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <NavLink className={currentClassName} to={currentPath}>{currentName}</NavLink>
            </div>);
}

export default Directory;