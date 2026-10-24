import "./Vocabulary.css";
import levelsVocabulary from "../data/levels-vocabulary.js";
import Directory from "../components/layout/Directory.jsx";
import LevelList from "../components/layout/LevelList.jsx";

function Vocabulary () {
      return (<main className="vocabulary-page">
            <Directory currentName="Vocabulary" currentPath="/vocabulary" currentClassName="directory-button"/>
            <h1>Vocabulary</h1>
            <h2 className="sub-title">Build a strong foundation in French vocabulary. Learn key rules and practice using them with confidence.</h2>
            <LevelList levels={levelsVocabulary}/>
      </main>);
}

export default Vocabulary;