import React, { Component } from 'react';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import {Route,Switch} from 'react-router-dom';
import Signup from './components/signup';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Switch>
         <Route path="/" exact component={Main}/>
         <Route path="/signup" exact component={Signup}/>
       </Switch>
      
      </div>
    );
  }
}

export default App;

