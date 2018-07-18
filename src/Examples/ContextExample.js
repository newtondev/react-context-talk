import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    number: 1337
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const Green = () => (
  <div className="green-component">
    <AppContext.Consumer>
      {(context) => context.number}      
    </AppContext.Consumer>
  </div>
);

const Blue = () => (
  <div className="blue-component">
    <Green />
  </div>
);

class Red extends Component {
  render() {
    return (
      <AppProvider>
        <div className="red-component">          
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
          <Blue />
        </div>
      </AppProvider>
    );
  }
}

export default Red;
