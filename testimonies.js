import React, { Component } from 'react';

class Testimonies extends Component{
    render() {
    return (
        <testimonies>
            <section>
            <h3>Testimonies </h3><br/>
            <div className="box1">
            <div className="pic1"></div>
            <h3>
                Mr. XYZ
            </h3>
            <p>
                Testimonies are here. <br/>
                Few lines about the authenticity of the programme and recommendations.
            </p>    
            </div>
            <div className="box2">
            <div className="pic2"></div>
            <h3>
                Prof. ABC
            </h3>
            <p>
                Testimonies are here. <br/>
                Few lines about the authenticity of the programme and recommendations.
            </p>  
            </div>
            </section>
        </testimonies>
    );
    }
}

export default Testimonies;  