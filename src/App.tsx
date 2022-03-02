import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {defaultTheme} from './theme';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
