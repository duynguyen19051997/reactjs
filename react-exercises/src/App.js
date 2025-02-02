import React from "react";

import logo from "./logo.svg";
import "./App.css";

import Button from "./Components/ex1/Button";
import Album from "./Components/ex2/Album";
import ImageInterval from "./Components/ex3/ImageInterval";
import List from "./Components/ex4/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Album />
        <ImageInterval />
        <List />
      </header>
    </div>
  );
}

export default App;
