import React, { Component } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';

// An intermediate component that uses the ThemedButton
const Toolbar = (props) => (
  <ThemedButton onClick={props.changeTheme}>
    Change Theme
  </ThemedButton>
);

class ThemedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark
    }));
  }

  render() {
    // The ThemedButton component inside the ThemeProvider 
    // uses the theme from state, while the one outside uses 
    // the default dark theme
    return (
      <div>
        <section class="spacing">
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
        </section>
        <section className="spacing">
          <ThemedButton>Default Button</ThemedButton>
        </section>
      </div>
    );
  }
}

export default ThemedApp;
