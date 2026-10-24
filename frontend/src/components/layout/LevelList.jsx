import LevelCard from "./LevelCard.jsx";
import "./LevelList.css";
import {NavLink} from "react-router-dom";

function LevelList({levels}) {
      return(<section className="level-section">
            <div className="level-list">
                  {levels.map((item) => (<NavLink to={`/${item.type}/${item.level.toLowerCase()}`} className="level-link"><LevelCard key={item.level} 
                  level={item.level} name={item.name} description={item.description} 
                  totalExams={item.totalExams} color={item.color} />
                  </NavLink>))}
            </div>

            <div className="level-heading">
                  <h2>Choose your proper level to start learning</h2>
            </div>
      </section>);
}

export default LevelList;