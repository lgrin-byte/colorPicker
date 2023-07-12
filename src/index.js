import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';
import store from './store';


const App = () => (
  <Provider store={store}>
    <ColorPicker />
    <Canvas />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
















