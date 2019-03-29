import React, { Component } from 'react';
import Form from "./form";
import Happen from "./happen.js";
import Started from "./started";
import Testimonies from"./testimonies";
import Header from './header';
import Footer from './footer';



class Main extends Component {
  render() {
    return (
      <React.Fragment>
      <Header/>
      <main>
        <section className="intro">
            <h2>Why Us?</h2>
            <div>
             <p>Our main aim is to reduce anxiety levels amongst people and help them in coping up with difficult situations easily. Make them confident enough to take their own decisions, to help them understand their roles, responsibilities and lead a happy life.</p>
            </div>
            <span/>
            <span/>
        <div className="gallery">
        <div className="gallery-item-one"></div>
         
        </div>
                <p>
                 <h4> Who needs this programme?</h4>
                </p><br/>
              <li> Reason based on user studies</li><br/>
              <li> Mention demographic and children who needs this programme </li><br/>
              <li> Yoga as a way of life, etc.</li><br/>
              </section>
        <Happen/>
        <Started/>
        <Testimonies/>
        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default Main;
