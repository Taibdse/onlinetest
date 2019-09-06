import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" render={() => <h2>Index Page</h2>}/>
        <Route exact path="/other" render={() => <h2>Other Page</h2>}/>
      </Router>
    </Provider>
  );
}

export default App;
