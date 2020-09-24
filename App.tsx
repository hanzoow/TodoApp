/* eslint-disable react/jsx-no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import RootStackNavigation from './src/navigations';
import {Provider} from 'react-redux';
import {store} from './src/store';
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <RootStackNavigation />
    </Provider>
  );
};

export default App;
