import React from 'react';

import './App.css';
import UseMemoExample from './UseMemoExamples';
import UseStateExample from './UseStateExample';

function App() {
  return (
    <div className="App">
      <h2>Hooks</h2>
      <UseStateExample />
      <UseMemoExample />
    </div>
  );
}

export default App;
