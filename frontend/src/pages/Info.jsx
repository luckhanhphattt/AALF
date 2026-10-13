import "./info.css";
import "./info_query.css";

function Info() {
  return (
    <main className="info-page">
      <div className="directory">
        <img />
        <img />
        <p>About Us</p>
      </div>
      <h1>About Us</h1>
      <p>Welcome to our "About Us" page, where all of our stories lie here.</p>
      <ul className="question-list">
        <li>
          <h2>Why did we create Bonjour My French?</h2>
          <p>We created Bonjour My French because learning a language should 
            be more than memorizing vocabulary and grammar rules. We wanted to
            create a learning experience that feels clear, motivating, and easy
            to follow, helping learners build their French with confidence.</p>
        </li>
        <li>
          <h2>What makes our approach different?</h2>
          <p>We focus on creating a balanced learning experience where lessons, 
            practice, and progress work together. Instead of simply completing activities,
            learners can understand their performance ad use it to guide what they should practice next.</p>
        </li>
        <li>
          <h2>What do we believe about learning French?</h2>
          <p>We believe that progress comes from consistency, meaningful practice, and understanding your own
            strengths and weaknesses. Learning French should feel achievable, rewarding, and enjoyable - not overwhelming.</p>
        </li>
        <li>
          <h2>Who is Bonjour My French for?</h2>
          <p>Bonjour My French is for anyone who wants to build their French skills in a structured and flexible way
            - from beginners taking their first steps to more advanced learners looking to strengthen their abilities.</p>
        </li>
        <li>
          <h2>Where are we going next?</h2>
          <p>Our vision is to create a more personalized and engaging French-learning experience. As Bonjour My French grows, 
            we hope to introduce richer learning experiences, smarter recommendations, and more ways for learners to practice 
            and connect with the French langaugae and culture.</p>
        </li>
      </ul>
    </main>
  );
}

export default Info;
