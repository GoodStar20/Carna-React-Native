import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import configureStore from 'Store/store';
import { AppContainer } from 'Navigators/AppContainer';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <AppContainer />
      </Root>
    </Provider>
  );
};

export default App;
