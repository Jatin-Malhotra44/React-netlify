import React from 'react';
import './App.css';
import Home from './components';
import Navbar from './components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/ContactMe';

const App=(props)=>{
  return (
    <div className="App">
        <CssBaseline/>
        <Route path='/' exact component={Home}/>
        <Route path='/resume' exact component={Resume}/>
        <Route path='/portfolio' exact component={Portfolio}/>
        <Route path='/contact' exact component={Contact}/>
    </div>
  );
}

export default App;
