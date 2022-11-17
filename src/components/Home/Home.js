import React from 'react';
import "./Home.css";
import portal from './img/portal.png';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
        <div className="home">
            <div>
                <Link to="/personajes">
                    <img src={portal} alt="portal" />
                </Link>
            </div>
        </div>
        </>
    );
};

export default Home;