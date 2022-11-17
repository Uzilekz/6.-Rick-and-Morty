import React from "react";
import "./CardCircleStatus.css"

function CardCircleStatus({alive}) {
    const statusCircles = {
        alive: "#3ddd3d",
        dead: "#be2c1e",
        unknown: "#116cd4",
    };

    const status = statusCircles[alive?.toLowerCase() || "unknown"];

    return (
        <svg className="card-circle-status" width="25" height="20">
            <circle cx={10} cy={10} r={10} fill={status} />
        </svg>
    );
}

export default CardCircleStatus;