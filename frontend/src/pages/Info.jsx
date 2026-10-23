import "./info.css";
import {NavLink} from "react-router-dom";
import levelGraph from "../assets/images/level_graph.png";
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
                   <hr className="title-divider" />
                   <h2>How It Works?</h2>
                   <ul className="info-step">
                        <li className="info-list-item">
                              <h3>01 - Choose Your Level</h3>
                              <p>Starting with the level that matches your current French ability, from A1 beginner to C12 advanced levels.</p>
                        </li>
                        <li className="info-list-item">
                              <h3>02 - Learn Through Lessons</h3>
                              <p>Building your foundation with focused lessons. Each lesson is designed to help you learn step by step on diversified topics.</p>
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
                              <p>Reviewing your scores, accuracy rates, completed lessons, and skill performance to know how improved you are.</p>
                        </li>
                        <li className="info-list-item">
                              <h3>06 - Keep Improving</h3>
                              <p>Using your results to identify areas that need more practice and continue working towards your next level.</p>
                        </li>
                   </ul>
            </section>

            <img className="level-graph" src={levelGraph} />
            
            <aside>
                  <hr className="title-divider" />
                  <h2>Learning Areas</h2>
                  <ul className="learning-list">
                        <li className="learning-item">
                              <h3>Grammar</h3>
                              <p>Build a strong foundation in French grammar through clear explanations and focused practice.</p>
                        </li>
                        <li className="learning-item">
                              <h3>Vocabulary</h3>
                              <p>Expand your French vocabulary through practical topics and meaningful exercises.</p>
                        </li>
                        <li className="learning-item">
                              <h3>Reading</h3>
                              <p>Improve your reading and comprehension with texts and articles suitably designed.</p>
                        </li>
                        <li className="learning-item">
                              <h3>Listening</h3>
                              <p>Open the door to get used to understand from basic to complex conversations in real French. </p>
                        </li>
                        <li className="learning-item">
                              <h3>Writing</h3>
                              <p>Develop your ability to express ideas clearly and accurately in French with well-oriented structures.</p>
                        </li>
                        <li className="learning-item">
                              <h3>Speaking</h3>
                              <p>Confidently express your opinions and grow your critical thinking through phrases.</p>
                        </li>
                  </ul>

                  <hr className="title-divider" />
                  <h2 className="progress-title">Progress & Assessments</h2>
                  <div className="progress-bar">
                  <svg className="progress-square" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path  d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square s8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square s9" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  <svg className="progress-square s10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M23.05 23.05V488.9H488.9V23.05H23.05z"/></svg>
                  </div>
                  <p className="progress-sentence">Your learning progress is based on your activity and performance across lessons and practice.</p>

                  <div className="progress-list">
                        <div className="item accuracy">
                              <h3>Accuracy</h3>
                              <p>Measure how often you did answered questions correctly.</p>
                        </div>
                        <div className="item average">
                              <h3>Average Score</h3>
                              <p>Track your average performance through completed activities.</p>
                        </div>
                        <div className="item mastery">
                              <h3>Skill Mastery</h3>
                              <p>Understand your strengths, identify areas that need practicing.</p>
                        </div>
                        <div className="item history">
                              <h3>Learning History</h3>
                              <p>Review your previous activities and see your performance changing over the time.</p>
                        </div>
                  </div>
                  <h2 className="keep-learning-slogan">KEEP LEARNING, KEEP PROGRESSING</h2>
                  <p className="sub-slogan"><i>Every lesson is a valuable step in your French journey.</i></p>
            </aside>

      </main>);
}

export default Info;