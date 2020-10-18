import React from 'react';
import { Button } from 'reactstrap'; // import other reactstrap components here
import logo from './logo.svg';
import './App.css';
import UploadPlot from './plot.js';

// Make sure to view as Babel syntax (not normal JavaScript syntax)

// Run local build (will auto update when you make an edit and save):
// >npm start

// Deploy to gh-pages branch: 
// >npm deploy


// Here's the app
function App() {
  // The app needs to return a React component (looks a lot like HTML!)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UploadPlot />
      </header>
    </div>
  );
}

export default App;
