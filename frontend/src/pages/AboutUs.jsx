import "./AboutUs.css";
import {NavLink} from "react-router-dom";

function AboutUs() {
  return (
    <main className="aboutus-page">
      <div className="directory">
        <NavLink className="home-button" to="/" end>Home</NavLink>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow-right">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <NavLink className="aboutus-button" to="/aboutus">About Us</NavLink>
      </div>
      <div class="about-us-title">
      <h1>About Us</h1>
      <p>Welcome to our "About Us" page, where all of our stories lie here.</p>
      </div>
      <ul className="question-list">
        <li className="list-item">
          <h2>Why did we create AALF?</h2>
          <p>We created AALF (which stands for <em>Atelier d'Apprentissage de Langue Française </em>) because learning a language should 
            be more than memorizing vocabulary and grammar rules. We wanted to
            create a learning experience that feels clear, motivating, and easy
            to follow, helping learners build their French with confidence.</p>
        </li>
        <li className="list-item">
          <h2>What makes our approach different?</h2>
          <p>We focus on creating a balanced learning experience where lessons, 
            practice, and progress work together. Instead of simply completing activities,
            learners can understand their performance ad use it to guide what they should practice next.</p>
        </li>
        <li className="list-item">
          <h2>What do we believe about learning French?</h2>
          <p>We believe that progress comes from consistency, meaningful practice, and understanding your own
            strengths and weaknesses. Learning French should feel achievable, rewarding, and enjoyable - not overwhelming.</p>
        </li>
        <li className="list-item">
          <h2>Who is AALF for?</h2>
          <p>Bonjour My French is for anyone who wants to build their French skills in a structured and flexible way
            - from beginners taking their first steps to more advanced learners looking to strengthen their abilities.</p>
        </li>
        <li className="list-item">
          <h2>Where are we going next?</h2>
          <p>Our vision is to create a more personalized and engaging French-learning experience. As AALF grows, 
            we hope to introduce richer learning experiences, smarter recommendations, and more ways for learners to practice 
            and connect with the French langaugae and culture.</p>
        </li>
      </ul>
    </main>
  );
}

export default AboutUs;
