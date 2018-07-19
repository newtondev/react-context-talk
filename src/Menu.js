import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

export default () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Context Demos</h1>
      </header>
      <p className="App-intro">          
        Below is a list of demos for React context.
      </p>
      <ul>
          <li><Link to="/props-passing-example">Props Passing</Link></li>
          <li><Link to="/context-example">Using Context</Link></li>
          <li><Link to="/actions-context-example">Actions using Context</Link></li>
          <li><Link to="/theme-context-example">Themed Context</Link></li>
        </ul>
    </div>
  );
};
