import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectPanel from "./ProjectPanel";
import Nav from "./Nav";

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
    <>
      <Nav />
      <div id="portfolio" className="section portfolio">
        {<ProjectPanel projects={projects} />}
      </div>
    </>
  );
};

export default App;
