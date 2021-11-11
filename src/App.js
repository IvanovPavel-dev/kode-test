import "./App.css";

import React from "react";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/" exact>
          <Redirect to="users" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
