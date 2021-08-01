import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";

const App = () => {
  return (
    <>
      <Route path={["/project/:id", "/"]}>
        <Home />
      </Route>
    </>
  );
};

export default App;
