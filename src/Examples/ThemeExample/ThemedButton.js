import React from 'react';
import { ThemeContext } from './ThemeContext';

// ThemedButton
export default (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button 
          {...props}
          style={{backgroundColor: theme.background, color: theme.foreground}}
        />
      )}
    </ThemeContext.Consumer>
  );
}
