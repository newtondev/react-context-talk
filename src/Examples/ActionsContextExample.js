import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    number: 1337,
    increment: () => {
      this.setState({number: this.state.number + 1});
    }
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
  <div className="blue-component-np">
    <AppContext.Consumer>
      {(context) => <button onClick={context.increment}>INCREMENT</button>}
    </AppContext.Consumer>
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
