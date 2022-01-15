import React from 'react';
import './App.css';

import {Switcher} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Switcher isChecked={false} />
        
      </header>
    </div>
  );
}

export default App;
