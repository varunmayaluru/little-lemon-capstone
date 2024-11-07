import React from "react";
import { Link } from "react-router-dom";
import restaurant_food from "../icons_assets/restauranfood.jpg"


const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned mediteranean restaurant focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>
                {/* Banner image */}
                <div className="banner-img">
                    <img src={restaurant_food} alt="restaurant_food" />
                </div>

            </section>
        </header>
    )
}

export default Header;