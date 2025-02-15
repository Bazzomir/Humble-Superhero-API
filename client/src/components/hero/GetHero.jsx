import React from "react";

const GetHero = ({ superheroes }) => {
    return (
        <div className="mt-4 container">
            <div className="row">
                {superheroes.map((hero) => (
                    <div className="hero-card col-md-4 col-sm-6 mb-4" key={hero.name}>
                        <div className="hero-card-inner border-shadow">
                            <div className="hero-card-front">
                                <h3 className="m-0 p-0">{hero.name}</h3>
                                <p className="m-0 p-0">{hero.superpower}</p>
                                <p className="m-0 p-0">Humility Score: {hero.humilityScore}/10</p>
                            </div>
                            <div className="hero-card-back">
                                <h3>{hero.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetHero; 