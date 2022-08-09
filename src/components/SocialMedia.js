import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";


const SocialMedia = () => {

    const [ media, setMedia ] = useState([])

    useEffect( () => {
        axios.get('data/db.json').then( res => {setMedia(res.data.social)}  )
    }, [] )

    const mediaList = media.map( item => {
        return (
            <Fragment>
                <div className={item.class} key={item.id}>
                    <i className={item.icon}></i>
                    <p>
                        <span className="info1">{item.title}</span>
                        <span className="info2">{item.body}</span>
                    </p>
                </div>
            </Fragment>
        )
    } )

    return (
        <Fragment>
            <div className="social-media">
                {mediaList}
            </div>
        </Fragment>
    );
}
 
export default SocialMedia;