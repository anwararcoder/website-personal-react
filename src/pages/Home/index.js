import React, { Fragment } from "react";
import { Component } from "react";

import Creative from './../../components/Creative';
import Footer from './../../components/Footer';
import Home from './../../components/Home';
import Navbar from './../../components/Navbar';
import Portfolio from './../../components/Portfolio';
import ProfileSkills from './../../components/ProfileSkills';
import Work from './../../components/Work';
import SocialMedia from './../../components/SocialMedia';

class Index extends Component {
    state = {

    }
    render() {
        return (
            <Fragment>
                <Navbar />
                <Home />
                <Work />
                <Portfolio />
                <ProfileSkills />
                <Creative />
                <SocialMedia />
                <Footer />
            </Fragment>
        );
    }
}

export default Index;