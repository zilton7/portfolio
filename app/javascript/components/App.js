import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";
import axios from "axios";

import Home from "./Home";

const App = () => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    axios
      .get("api/v1/texts")
      .then((response) => {
        setTexts(response.data[0].analytics);
      })
      .catch((response) => console.log(response));

    ReactGA.initialize("G-DZLYSZWR8M");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Route path={["/project/:id", "/"]}>
        <Home texts={texts} />
      </Route>
    </>
  );
};

export default App;
