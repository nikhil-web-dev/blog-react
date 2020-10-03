import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/Styles/style.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar' 
import Welcome from './Components/Welcome'
import CreateBlog from './Components/CreateBlog'
import Home from './Components/Home'
import UserProfile from './Components/UserProfile'
import Myblogs from './Components/Myblogs'

function App() {
  return (
    <Router>
    <Fragment>
      <Navbar />

      <section className="pageBg">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={CreateBlog} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/myblogs" component={Myblogs} />
        </Switch>
      </section>
    
    </Fragment>
  </Router>
  );
}

export default App;
