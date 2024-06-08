import React, { useEffect, useState } from "react";
import "./App.css";
import SchoolInfo from "./SchoolInfo";
import SchoolSelect from "./SchoolSelect";

function App() {
  const [school, setschool] = useState([]);
  const [selectedschool, setselectedschool] = useState(null);

  useEffect(() => {
    const apiURl = "https://data.cityofnewyork.us/resource/s3k6-pzi2.json";

    fetch(apiURl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setschool(data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  const handleSelectChange = (e) => {
    const selectedName = e.target.value;
    const selectedschool = school.find(
      (school) => school.school_name === selectedName
    );
    console.log("Name", selectedschool);
    setselectedschool(selectedschool);
  };

  return (
    <div className="App">
      <SchoolSelect schools={school} onselectschool={handleSelectChange} />
      {selectedschool && <SchoolInfo school={selectedschool} />}
    </div>
  );
}

export default App;
