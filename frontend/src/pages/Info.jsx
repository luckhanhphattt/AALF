import "./info.css";
import {NavLink} from "react-router-dom";
function Info () {
      return (<main className="info-page">

            <div className="directory">
            <NavLink className="home-button" to="/" end>Home</NavLink>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow-right">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <NavLink className="info-button" to="/info">Info</NavLink>
            </div>
            <div className="info-title">
                  <h1>Info</h1>
                  <p>How does the platform work? What can I learn and how the progress is measured?</p>
            </div>

            <section>
                  <p className="section-intro"><strong>AALF</strong> is designed to make learning French simple, structured and easy to follow.
                   Explore lessons, practice your skills and track your progress as you move from A1 to C2 without 
                   any constraint or time pressure, as you will be able to learn at anytime, anywhere.</p>
                   <h2>How It Works?</h2>
                   <ul className="info-step">
                        <li className="info-list-item">
                              <h3>01 - Choose Your Level</h3>
                              <p>Starting with the level that matches your current French ability, from A1 beginner to C12 advanced levels.</p>
                        </li>
                        <li className="info-list-item">
                              <h3>02 - Learn Through Lessons</h3>
                              <p>Building your founation with focused lessons. Each lesson is designed to help you learn step by step on diversified topics.</p>
                        </li>
                        <li className="info-list-item">
                              <h3>03 - Practice Your Skills</h3>
                              <p>Putting your knowledge with Reading & Writing activities. Practice to improve your French levels day by day now.</p>
                        </li>
                        <li className="info-list-item">
                              <h3>04 - Test with Exam mode</h3>
                              <p>Getting used to be tested with mock test with real time countdown and understand your strengths and weaknesses.</p>
                        </li>
                        <li className="info-list-item">
                              <h3>05 - Track your progress</h3>
                              <p>Reviewing your scores, accuracy, completed lessons, and skill performance to know how improved you are.</p>
                        </li>
                        <li className="info-list-item">
                              <h3>06 - Keep Improving</h3>
                              <p>Using your results to identify areas that need more practice and continue working towards your next level.</p>
                        </li>
                   </ul>
            </section>
      </main>);
}

export default Info;