import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/ex1/Button";
import Album from "./Components/ex2/Album";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Album />
      </header>
    </div>
  );
}

export default App;
