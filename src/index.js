import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
