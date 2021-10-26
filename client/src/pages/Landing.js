import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import shopImg from "../assets/shop.png"

const Landing = () => {
    return (
        <section>
            <Cart />
            <div>
                <img src={shopImg} alt='landing'></img>
            </div>
            <div>
                test
            </div>
        </section>
    )
}

export default Landing;