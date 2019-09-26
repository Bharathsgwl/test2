import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Root from './components/Root';
function App() {
  return (
    <div className="App">
    <Root />
  <Router>
  <Route exact path="/register" component={Register} />
  <Route exact path="/Home" component={Home} />
  </Router>

    </div>
  );
}

export default App;
