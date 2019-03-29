import React, { Component } from 'react';
import Nav from "./nav";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Yoga is a way <br/>of life,< br/> to better and < br/> improve yourself.</h1>
            <div>
            </div>
            <li> 52 week programme</li><br/>
            <li> Indepth transformation with sutras </li><br/>
            <li> Feature of the programme</li><br/>
            <br/>
          <Link to="/signup"><a className="contact">Start Now</a></Link>

        </div>
       
      </header>
      
    );
  }
}

export default Header;
