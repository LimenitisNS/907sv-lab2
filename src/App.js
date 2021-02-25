import React from 'react';
import './App.css';
import List from './components/List/List';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Динамический список</h2>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
