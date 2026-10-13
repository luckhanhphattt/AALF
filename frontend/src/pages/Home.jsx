import "./home.css";
import "./home_query.css";
import arcDeTriomphe from "../assets/images/arc_de_triomphe.jpg";
import eiffel from "../assets/images/eiffel.jpg";

function Home() {
      return (
            <main>
      <section className="hero">
            <img className="hero-image" src={arcDeTriomphe} />
            <div className="hero-text">
                  <h1>Parlez Français</h1>
                  <h1>Vivez Français</h1>
            </div>
      </section>
            <div className="slogan-part">
                  <h2 className="slogan">Your French journey starts here</h2>
                  <p className="sub-slogan-text">Build your French skills through engaging lessons, practice, and everyday conversations.</p>
            </div>
            
            <div className="intro">
                  <div className="explanation">
                        <h2>Why Bonjour My French?</h2>
                        <p>Bonjour My French brings everything together in <span>one simple lesson</span> experience, helping you build your skills through structured lessons, interactive practice, and real-world French. Start your French journey today!</p>
                        <div className="intro-card">
                        <div className="card-selection card1">
                              <h3>Structured lessons</h3>
                              <p>Have fun while learning by joyfully organized lessons and exercises </p>
                        </div>
                        <div className="card-selection card2">
                              <h3>Focused practice</h3>
                              <p>Get involved in real practice to imporve your fluency and competency day by day</p>
                        </div>
                        <div className="card-selection card3">
                              <h3>Various levels</h3>
                              <p>Well-oriented and assists you with each level's foundation</p>
                        </div>
                        <div className="card-selection card4">
                              <h3>Study at your pace</h3>
                              <p>No rush, just keep sutdy with your flexible time. Anytime, anywhere</p>
                        </div>
                        </div>
                  </div>
                  <img className="eiffel" src={eiffel}/>
            </div>

            <div className="category">
                  <div className="category-type">
                              <a className="type-element">Grammar</a>
                              <a className="type-element">Vocabulary</a>
                              <a className="type-element">Reading</a>
                              <a className="type-element">Writing</a>
                              <a className="type-element">Listening</a>
                              <a className="type-element">Speaking</a>
                  </div>
                  <div className="category-slogan"> 
                        <h3>Improve your French, one skill at a time</h3>
                        <p>Explore our exciting lessons and practice on your own with totally free access.</p>
                  </div>
            </div>
      <aside>
            <h3>Loved by French learners worldwide</h3>
            <div className="testimonial">
                  <div className="testi-card">
                        <div className="comment">
                              <h4>"The reading exercises are fantastic! I've learned so much vocabulary, and understand French easily."</h4>
                              <div className="testi-avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="testi-image">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                    </svg>
                                    <p className="name">Emma</p>
                              </div>
                        </div>
                        <div className="testi-note">
                              <p className="level">_____B2 learner__________________________</p>
                        </div>
                  </div>
                  <div className="testi-card">
                        <div className="comment">
                              <h4>"The reading exercises are fantastic! I've learned so much vocabulary, and understand French easily."</h4>
                              <div className="testi-avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="testi-image">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                    </svg>
                                    <p className="name">Lucas</p>
                              </div>
                        </div>
                        <div className="testi-note">
                              <p className="level">_____A2 learner__________________________</p>
                              
                        </div>
                  </div>                        
            </div>
            <div className="join-now">
                        <h4>Join thousands of learners who are improving their French everyday now</h4>  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="arrow-now">
                              <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
            </div>
      </aside>
      </main>
      );
}

export default Home;