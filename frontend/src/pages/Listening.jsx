import "./Listening.css";
import Directory from "../components/layout/Directory.jsx";
import LevelList from "../components/layout/LevelList.jsx";
import levelsListening from "../data/levels-listening.js";
function Listening () {
      return (<main className="listening-page">
            <Directory currentName="Listening" currentPath="/listening" currentClassName="directory-button" />
            <h1>Listening</h1>
            <h2 className="sub-title">Build a strong foundation in French comprehensive oral skills. Learn to capture and practice listening.</h2>
            <LevelList levels={levelsListening} />
      </main>);
}     

export default Listening;