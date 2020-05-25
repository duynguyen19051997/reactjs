import React from 'react';
import logo from './logo.svg';

import './App.css';

// import Counter from './Components/Counter';
// import Toggle from './Components/Toggle';
// import Login from './Components/Login';
// import List from './Components/List';
import Form from './Components/Form';
import Pane from './Components/Pane';
import Up from './Components/Up';
import Button from './Components/Button';
import Input from './Components/Input';

// const animals = ["dog", "cat", "lion", "tiger", "dinosaur"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        {/* <Counter />
        <Toggle info="Anh Duy" /> 
        <List animals={animals} />
        */}
        <Pane up={<Up username="duynguyen" />} >
          <p>Nguyen Vu Anh Duy</p>
        </Pane>
        <Button totalStudent="20" />
        <Input />
      </header>
    </div>
  );
}

export default App;
