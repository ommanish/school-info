import React from "react";

const SchoolSelect = ({ schools, onselectschool }) => {
  return (
    <select onChange={onselectschool} defaultValue="">
      <option value="select"></option>
      {schools.map((school) => (
        <option key={school.dbn} value={school.school_name}>
          {school.school_name}
        </option>
      ))}
    </select>
  );
};

export default SchoolSelect;
