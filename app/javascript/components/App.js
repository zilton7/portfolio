import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectPanel from "./ProjectPanel";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((response) => console.log(response));
  }, []);

  return (
    <div>
      <ul>{<ProjectPanel projects={projects} />}</ul>
    </div>
  );
};

export default App;
