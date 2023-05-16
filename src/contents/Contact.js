import React, { Component } from "react";

import Social from "../components/Social";

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact</h1>
                <h2>Email : pluem166256@gmail.com</h2>
                <h2>Facebook : Pluem Aekasit</h2>
                <h2>Instagram : pluemmmmmmmmmm</h2>
                <h2>Telephone : 095-7716-859</h2>
                <Social />
            </div>
        );
    }
}

export default Contact;