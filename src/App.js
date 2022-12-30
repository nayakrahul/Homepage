import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <App />,
    document.getElementById('app')
  );
registerServiceWorker.unregister();
