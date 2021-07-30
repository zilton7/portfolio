import React, { useState, useEffect } from "react";
import axios from "axios";

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
    return <li key={project.id}>{project.name}</li>;
  });

  return (
    <div>
      Hello World!
      <ul>{list}</ul>
    </div>
  );
};

export default App;
