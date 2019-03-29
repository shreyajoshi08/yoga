import React, { Component } from 'react';
import './topbar.css';

class Topbar extends Component {
    render() {
      return (
        <navi>
            <ul>
                <li className="logo">Anahad </li>
            </ul>
            <ul>
                
                <li><a href="www.google.com">How it works?</a></li>
                <li><a href="www.google.com">About</a></li>
                <li><a href="www.google.com">Help</a></li>
                
            </ul>
            <div className="gallery1">
            </div>
        </navi>
      );
    }
  }
  
  export default Topbar;
  