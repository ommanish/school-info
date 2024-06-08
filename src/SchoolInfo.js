import React from "react";

const SchoolInfo = ({ school }) => {
  return (
    <div className="school-info">
      <span>{school.dbn}</span>
      <h1>{school.school_name}</h1>
      <p>{school.overview_paragraph}</p>
    </div>
  );
};

export default SchoolInfo;
