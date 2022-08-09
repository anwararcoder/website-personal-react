import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";


// class Portfolio extends Component {
//     state = {
//         portfolio : []
//     }

//     // componentDidMount() {
//     //     axios.get('data/db.json').then( res => { this.setState({portfolio: res.data.portfolio}) } )
//     // }

//     render() {

//         // const {portfolio} = this.state;
//         // const portfolioList = portfolio.map( item => {
//         //     return (
//         //         <div key={item.id}>
//         //             <img src={item.image} alt="" />
//         //             <p class="overlay">
//         //                 <span>
//         //                     Show Image
//         //                 </span>
//         //             </p>
//         //         </div>
//         //     )
//         // } )

//         return (
//             <Fragment>
//                 <div class="portfolio">
//                     <h2 class="portfolio-title"><span>My</span> Portfolio</h2>
//                     <ul class="portfolio-list">
//                         <li class="portfolio-item active">All</li>
//                         <li class="portfolio-item">HTML</li>
//                         <li class="portfolio-item">Photoshop</li>
//                         <li class="portfolio-item">Wordpress</li>
//                         <li class="portfolio-item">Mobile</li>
//                     </ul>
//                     <div class="box">
//                         {/* {portfolioList} */}
//                     </div>
//                 </div>
//             </Fragment>
//         );
//     }
// }



const Portfolio = () =>{

    const [ images, setImages ] = useState([])

    useEffect( () => {
        axios.get('data/db.json').then( res => { setImages(res.data.portfolio) } )
    }, [] )

    const portfolioList = images.map( item => {
        return (
            <div key={item.id}>
                <img src={item.image} alt="" />
                <p class="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
        )
    } )
    return (
        <Fragment>
            <div class="portfolio">
                <h2 class="portfolio-title"><span>My</span> Portfolio</h2>
                <ul class="portfolio-list">
                    <li class="portfolio-item active">All</li>
                    <li class="portfolio-item">HTML</li>
                    <li class="portfolio-item">Photoshop</li>
                    <li class="portfolio-item">Wordpress</li>
                    <li class="portfolio-item">Mobile</li>
                </ul>
                <div class="box">
                    { portfolioList }
                </div>
            </div>
        </Fragment>
    )
}
export default Portfolio;