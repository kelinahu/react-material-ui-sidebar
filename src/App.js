import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/'
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Progress from "./components/Progress";
import Settings from './components/Settings';
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/progress" component={Progress}/>
      <Route path="/settings" component={Settings}/>
    </>
  );
}

export default App;
