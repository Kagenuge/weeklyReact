import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <h1 className="h1">Learning Diary</h1>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/add" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
