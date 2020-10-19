import React from 'react';
import { 
  Button, Card, CardBody, CardText
} from 'reactstrap'; // import other reactstrap components here
import logo from './logo.svg';
import './App.css';
import UploadPlot from './plot.js';

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
