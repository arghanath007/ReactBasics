import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SignIn from "../Authentication/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Route path="/signin" component={SignIn} />
    </BrowserRouter>
  );
}

export default App;
