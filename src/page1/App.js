import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { NotFound, Clock, LoginControl, NameForm, Calcultor } from '../page2/index';
import Set from '../page3/index';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/clock">clock</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/calcultor">calcultor</Link></li>
        <li><Link to="/render">render</Link></li>
        <li><Link to="/404">404</Link></li>
        <li><Link to="/set">set</Link></li>
      </ul>

      <Route path="/clock" component={Clock} />
      <Route path="/login" component={LoginControl} />
      <Route path="/form" component={NameForm} />
      <Route path="/render" render={() => {return <h1>我是匹配到的路由</h1>}} />
      <Route path="/calcultor" component={Calcultor} />
      <Route path="/404" component={NotFound} />
      <Route path="/set" component={Set} />
    </Router>
  );
}

export default App;
