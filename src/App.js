import React from 'react';
import './App.css';
import CatComponent from './API/CatComponent';
import DogComponent from './API/DogComponent';

function App() {
  return (
    <div className="App">
      <div className="results">
        <DogComponent />
      </div>
    </div>
  );
}

export default App;
