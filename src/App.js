import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropsPassingExample from 'Examples/PropsPassingExample';
import ContextExample from 'Examples/ContextExample';
import ActionsContextExample from 'Examples/ActionsContextExample';
import ThemeContextExample from 'Examples/ThemeExample/ThemeContextExample';
import Menu from 'Menu';
import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/props-passing-example" component={PropsPassingExample} />
        <Route path="/context-example" component={ContextExample} />
        <Route path="/actions-context-example" component={ActionsContextExample} />
        <Route path="/theme-context-example" component={ThemeContextExample} />
        <Route exact path="/" component={Menu} />
      </div>
    );
  }
}

export default App;
