import React, { Component } from "react";
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subyopic">My Education</h1>
                <Widecard title="Faculty of Business Administration, Department of Information Technology" where="Rmutt University" from="2020" to="Presecnt" />
                <Widecard title="Science and Mathematics" where="Pibulwittayalai Hight School" from="2017" to="2019" />
            </div>
        );
    }
}

export default Education;