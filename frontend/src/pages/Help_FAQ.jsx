import "./Help_FAQ.css";
import {NavLink} from "react-router-dom";

function Help_FAQ () {
      return (<main className="helpfaq-page">
            <div className="directory">
        <NavLink className="home-button" to="/" end>Home</NavLink>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow-right">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <NavLink className="helpfaq-button" to="/helpfaq">Help & FAQ</NavLink>
      </div>
      <div className="helpfaq-title">
            <h1>Help & FAQ</h1>
            <p>Find help and view some of our frequently asked questions</p>
      </div>
      <div className="help-grid">
            <ul className="help-list">
            <li>
                  <h2>Learning</h2>
            </li>
            <li>
                  <h3>What level should I start with?</h3>
                  <p>Start with the level that best matches
                  your current French ability. Feel free to stroll around!
                  </p>
            </li>
            <li>
                  <h3>Can I change my level after?</h3>
                  <p>Yes. You can change your learning level at any time if you feel 
                  that your current level is too easy or too challenging.</p>
            </li>
            <li>
                  <h3>What can I learn on AALF?</h3>
                  <p>You can learn and practice French through lessons and practice 
                  our valuable exercises.</p>
            </li>
            <li>
                  <h3>Can I learn at my own pace?</h3>
                  <p>Yes, for sure. AALF is designed to let you learn at a pace that 
                  works for you the best. You can return to lessons and practice whenever you are ready.</p>
            </li>
      </ul>

            <ul className="help-list">
            <li>
                  <h2>Practice & Scores</h2>
            </li>
            <li>
                  <h3>How are practice activities scored?</h3>
                  <p>Your score is calculated based on the answers you 
                  submitted and the number of questions you answered correctly.
                  </p>
            </li>
            <li>
                  <h3>Can I retake a pratice activity?</h3>
                  <p>Yes. You can repeat practice activities to review your mistakes 
                  and improve your performance.</p>
            </li>
            <li>
                  <h3>Will my practice results be saved?</h3>
                  <p>Yes. Your results can be saved to your learning history 
                  so you can track your performance over the time.</p>
            </li>
            <li>
                  <h3>What is the minimum grade to pass?</h3>
                  <p>The minimum grade to have an exercise passed is equal or 
                  greater than 80, otherwise, you need to retake it.</p>
            </li>
      </ul>

            <ul className="help-list">
            <li>
                  <h2>Progress</h2>
            </li>
            <li>
                  <h3>What does </h3>
                  <p>Start with the level that best matches
                  your current French ability. Feel free to stroll around!
                  </p>
            </li>
            <li>
                  <h3>Can I change my level after?</h3>
                  <p>Yes. You can change your learning level at any time if you feel 
                  that your current level is too easy or too challenging.</p>
            </li>
            <li>
                  <h3>What can I learn on AALF?</h3>
                  <p>You can learn and practice French through lessons and practice 
                  our valuable exercises.</p>
            </li>
            <li>
                  <h3>Can I learn at my own pace?</h3>
                  <p>Yes, for sure. AALF is designed to let you learn at a pace that 
                  works for you the best. You can return to lessons and practice whenever you are ready.</p>
            </li>
      </ul>

            <ul className="help-list">
            <li>
                  <h2>Learning</h2>
            </li>
            <li>
                  <h3>What level should I start with?</h3>
                  <p>Start with the level that best matches
                  your current French ability. Feel free to stroll around!
                  </p>
            </li>
            <li>
                  <h3>Can I change my level after?</h3>
                  <p>Yes. You can change your learning level at any time if you feel 
                  that your current level is too easy or too challenging.</p>
            </li>
            <li>
                  <h3>What can I learn on AALF?</h3>
                  <p>You can learn and practice French through lessons and practice 
                  our valuable exercises.</p>
            </li>
            <li>
                  <h3>Can I learn at my own pace?</h3>
                  <p>Yes, for sure. AALF is designed to let you learn at a pace that 
                  works for you the best. You can return to lessons and practice whenever you are ready.</p>
            </li>
      </ul>
      </div>
      </main>
      );
}

export default Help_FAQ;