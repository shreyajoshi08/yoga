import React, { Component } from 'react';
import Topbar from "./topbar";
import Login from "./login";
import Midbar from "./midbar";

class Fullmodule extends Component{
    render(){
        return(
            // <Login/>
            <div>
            <Topbar/>
            <Midbar/>
            </div>
           
            
        );
    }
    
}

export default Fullmodule;