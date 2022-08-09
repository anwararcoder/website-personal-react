import React, { Fragment } from "react";
import { Component } from "react";

import Navbar from './../../components/Navbar';
import Contact from './../../components/Contact';
import Footer from "../../components/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;