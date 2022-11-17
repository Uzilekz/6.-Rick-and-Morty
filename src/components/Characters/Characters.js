import React, { useEffect, useState } from 'react';
import "./Characters.css";
import logo from './img/logo.png';
import {Link} from "react-router-dom";
import axios from 'axios';
import CardCharacter from './CardCharacter/CardCharacter'

function Characters() {
    const [characters, setData] = useState(null);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            setData(response.data.results);
        });
    }, []);
    
    return (
        <>
        <div className="characters">
            <div className="div-logo">
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="card-character">
                {characters ? (
                    <CardCharacter info={characters} />
                    )
                    : (<div></div>)
                }
            </div>
        </div>
        </>
    )
}

export default Characters;