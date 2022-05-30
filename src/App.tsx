import React from 'react';
import './App.css';
import { StatusesDashboard } from './Components/StatusesDashboard/StatusesDashboard';


function App() {

  const users = ['Pasha', 'Luba', 'Kirill', undefined]

  return (
    <div className="App">
      <StatusesDashboard/>
    </div>
  );
}

export default App;
