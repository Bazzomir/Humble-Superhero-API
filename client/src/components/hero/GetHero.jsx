import React from "react"; // Import React for JSX usage

// GetHero component to display the list of superheroes
const GetHero = ({ superheroes }) => {
    return (
        <div className="mt-4 container"> 
            <div className="row">
                {/* Loop through the superheroes array and create a card for each hero */}
                {superheroes.map((hero) => (
                    <div className="hero-card col-md-4 col-sm-6 mb-4" key={hero.name}>
                        {/* Card for each superhero with inner structure for front and back */}
                        <div className="hero-card-inner border-shadow">
                            <div className="hero-card-front">
                                {/* Display superhero name, superpower, and humility score */}
                                <h3 className="m-0 p-0">{hero.name}</h3>
                                <p className="m-0 p-0">{hero.superpower}</p>
                                <p className="m-0 p-0">Humility Score: {hero.humilityScore}/10</p>
                            </div>
                            <div className="hero-card-back">
                                {/* Display hero name on the back side of the card */}
                                <h3>{hero.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetHero; // Export GetHero component for use in other parts of the application
