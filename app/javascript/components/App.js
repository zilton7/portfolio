import React, { useState, useEffect } from "react";
import axios from "axios";
import Project from "./Project";

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

  const list = projects.map((project) => {
    console.log(project);
    return <Project project={project} />;
  });

  return (
    <div>
      Hello World!
      <ul>{list}</ul>
    </div>
  );
};

export default App;
