import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-name">{skill.name}</h3>
      <div className="skill-level">
        <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillCard;