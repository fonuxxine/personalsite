import React from "react";

export function PositionCard ({ position, active = '' }) {

    return (
        <div className="card">
            <div className="pos-title" id={position.index} onClick={(position)}>
                <div className="pos-content">
                    <span className="material-symbols-outlined" id="play-arrow">
                        play_arrow
                    </span>
                    <div>
                        <h3>{position.title}</h3>
                        <h4 className="line">{position.company}</h4>
                    </div>
                </div>
                <span className="material-symbols-outlined" id="heart">
                    favorite
                </span>
            </div>
            <div className="pos-des">
                <p>{position.period}</p>
                <ul>
                    {position.description.map(des => <li>{des}</li>)}
                </ul>
            </div>
        </div>
    )
}