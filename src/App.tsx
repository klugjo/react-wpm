import * as React from 'react';
import {Provider} from 'react-redux';

import RootContainer from './containers/RootContainer';
import store from './store';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RootContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
