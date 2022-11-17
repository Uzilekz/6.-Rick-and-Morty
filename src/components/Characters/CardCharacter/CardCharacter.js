import React from 'react';
import "./CardCharacter.css";
import CardCircleStatus from "./CardCircleStatus/CardCircleStatus";

function CardCharacter(props) {
    return (
        <>
        {props.info.map((character, index) => (
            <div className="card" key={index}>
                <div className="card__img">
                    <img src={character.image} alt="" />
                </div>
                <div className="card__description">
                    <p className="card__name">{character.name}</p>
                    <CardCircleStatus alive={character.status} />
                    <p className="card__status">{character.status} - {character.species}</p>
                    <p className="card__last-seen">Visto por ultima vez en:</p>
                    <p className="card__location">{character.location.name}</p>
                    <p className="card__episode">Estuvo en {character.episode.length} episodio/s.</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default CardCharacter