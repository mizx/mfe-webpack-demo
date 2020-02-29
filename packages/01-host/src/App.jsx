import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
