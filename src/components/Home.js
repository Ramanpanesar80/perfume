import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div>
            <div id="header">
                <div id="container">
                    <nav>
                        <img src="logo.jpg" alt="404 Not Found" />
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </ul>
                        <div className="btns">
                            <Link to="/signin" >Sign In</Link>
                            <Link to="/signup" >Sign Up</Link>
                        </div>
                    </nav>
                    <div className="header-text">
                        <p>Welcome</p>
                        <h1>To the world of Perfumes!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
