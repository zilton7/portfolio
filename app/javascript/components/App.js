import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";

import Home from "./Home";

const App = () => {
  const [analytics, setAnalytics] = useState("");
  if (analytics !== "") {
    useEffect(() => {
      ReactGA.initialize("Your Unique ID");
    }, []);
  }

  return (
    <>
      <Route path={["/project/:id", "/"]}>
        <Home />
      </Route>
    </>
  );
};

export default App;
