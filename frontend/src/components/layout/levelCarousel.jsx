
import { useState } from "react";
import "./levelCarousel.css";

const skills = [
  {
    skill: "A1",
    description: "Learn basic French and introduce yourself in everyday situations.",
  },
  {
    skill: "A2",
    description: "Understand common expressions and communicate in familiar situations.",
  },
  {
    skill: "B1",
    description: "Handle everyday conversations and express your opinions.",
  },
  {
    skill: "B2",
    description: "Discuss complex topics and express your ideas clearly.",
  },
  {
    skill: "C1",
    description: "Use French fluently in academic and professional contexts.",
  },
  {
    skill: "C2",
    description: "Understand nuanced language and express yourself precisely.",
  },
];

function LevelCarousel() {
  const [index, setIndex] = useState(0);

  const visible = 3;
  const maxIndex = skills.length - visible;

  function nextSlide() {
    setIndex((current) => Math.min(current + 1, maxIndex));
  }

  function prevSlide() {
    setIndex((current) => Math.max(current - 1, 0));
  }

  return (
    <section className="level-carousel">
      <div className="carousel-heading">
        <h2>Explore French skills</h2>

        <div className="carousel-controls">
          <button
            onClick={prevSlide}
            disabled={index === 0}
            aria-label="Previous skills"
          >
            &#8592;
          </button>

          <button
            onClick={nextSlide}
            disabled={index >= maxIndex}
            aria-label="Next skills"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {skills.map((item) => (
            <article className="level-card" key={item.level}>
              <div className="level-card-label">
                {item.level}
              </div>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LevelCarousel;
