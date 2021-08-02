import React from "react";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";

import Home from "./Home";

const [analytics, setAnalytics] = useState("");

const App = () => {
  if (analytics !== "") {
    useEffect(() => {
      ReactGA.initialize("Your Unique ID");
    });
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
