import React from 'react';
import './App.css';
import Parent from './Parent';

//in this functional  App component, we will render our first parent component
function App() {
  return (
    <div className="App">
      <Parent/>
    </div>
  );
}

export default App;
