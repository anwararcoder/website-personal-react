import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ProfileSkills = () => {

    const [ profile, setProfile ] = useState([])

    useEffect( () => {
        axios.get('data/db.json').then( res => { setProfile(res.data.profile) } )
    }, [] )

    const profileList = profile.map( item => {
        return (
            <ul className="profile-list" key={item.id}>
                <li className="profile-item">
                    <span>Name</span>
                    {item.name}
                </li>
                <li className="profile-item">
                    <span>Birthday</span>
                    {item.birthday}
                </li>
                <li className="profile-item">
                    <span>Address</span>
                    {item.address}
                </li>
                <li className="profile-item">
                    <span>Phone</span>
                    {item.phone}
                </li>
                <li className="profile-item">
                    <span>Email</span>
                    {item.email}
                </li>
                <li className="profile-item">
                    <span>Website</span>
                    <span className="web">{item.website}</span>
                </li>
            </ul>
        )
    } )

    const [ skill, setSkill ] = useState([])

    useEffect( () => {
        axios.get('data/db.json').then( res => { setSkill(res.data.skills) } )
    }, [] )

    const skillList = skill.map( item => {
        return (
            <Fragment key={item.id}>
                <div className="bar">
                    <span className="title">Bootstrap</span>
                    <span className="perc">{item.bootstrap}</span>
                    <div className="parent">
                        <span className="sp1"></span>
                    </div>
                </div>

                <div className="bar">
                    <span className="title">CSS3</span>
                    <span className="perc">{item.css3}</span>
                    <div className="parent">
                        <span className="sp2"></span>
                    </div>
                </div>

                <div className="bar">
                    <span className="title">Photoshop</span>
                    <span className="perc">{item.photoshop}</span>
                    <div className="parent">
                        <span className="sp3"></span>
                    </div>
                </div>
            </Fragment>
        )
    } )

    return (
        <Fragment>
            <div className="profile_skills">
                <div className="container">
                    <div className="profile">
                        <h2 className="profile-title"><span>My </span>Profile</h2>
                        {profileList}
                    </div>
                    
                    <div className="skills">
                        <h2 className="skills-title">Some <span>skills</span></h2>
                        <p className="skills-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </p>
                        {skillList}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default ProfileSkills;