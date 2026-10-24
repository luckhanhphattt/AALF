import "./Grammar.css";
import levelsGrammar from "../data/levels-grammar.js";
import LevelList from "../components/layout/LevelList.jsx";
import Directory from "../components/layout/Directory.jsx";
function Grammar () {
      return (<main className="grammar-page">
            <Directory currentName="Grammar" currentPath="/grammar" currentClassName="directory-button"/>
            <h1>Grammar</h1>
            <h2 className="sub-title">Build a strong foundation in French grammar. Learn key rules and practice using them with confidence.</h2>
            <LevelList levels={levelsGrammar} />
      </main>);
}

export default Grammar;