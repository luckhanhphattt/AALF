function LevelCard({level, name, description, totalExams, color }) {
      return (<div className="level-card" style={{backgroundColor: color}}>
            <h2>{level}</h2>
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="total">0 / {totalExams} exams</p>
      </div>);
}

export default LevelCard;