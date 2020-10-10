import React from 'react';
import { Button } from 'reactstrap'; // import other reactstrap components here
import logo from './logo.svg';
import './App.css';

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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="danger" onClick={() => alert("It's a button from reactstrap!")}>Click me!</Button>
        <p>
          You should check out&nbsp;
          <a 
            className="App-link"
            style={{display: 'inline'}}
            href="https://reactstrap.github.io/components/alerts/"
            target="_blank"
          >
            reactstrap
          </a>
          &nbsp;too if you wanna mess around with other components.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React PLZ
        </a>
      </header>
    </div>
  );
}

export default App;
