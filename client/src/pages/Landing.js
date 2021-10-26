import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import shopImg from "../assets/shop.png"

const Landing = () => {
    return (
        <section style={{ display: 'flex' }}>
            <Cart />
            <div className='intro'>

                <div>
                    Your one stop shop destination for all your needs. Shop our store and view all the great deals!
                </div>
                <div className="button-container">

                    <Link to="/Home">
                        <button className="homeButton">Shop Now</button>
                    </Link>
                </div>
            </div>

            <div className='landingImg'>
                <img src={shopImg} alt='landing'></img>
            </div>
        </section>
    )
}

export default Landing;