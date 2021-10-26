import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import shopImg from "../assets/shop.png"
import shopImg2 from "../assets/shop2.png"

const Landing = () => {
    return (
        <section >
            <Cart />
            <div className='landing' style={{ display: 'flex' }}>
                <div className='intro'>

                    <div>
                        Your one stop shop destination for all your needs!
                    </div>
                    <br />
                    <div className="button-container">

                        <Link to="/Home">
                            <button className="homeButton">Shop Now</button>
                        </Link>
                    </div>
                </div>

                <div className='landingImg'>
                    <img src={shopImg} alt='landing'></img>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='landingImg'>
                    <img src={shopImg2} alt='landing'></img>
                </div>
                <div className='intro'>

                    <div>
                        Your one stop shop destination for all your needs!
                    </div>
                    <br />
                    <div className="button-container">

                        <Link to="/Home">
                            <button className="homeButton">Shop Now</button>
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Landing;