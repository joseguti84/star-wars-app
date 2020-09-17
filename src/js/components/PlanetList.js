import React from "react";

const PlanetList = ({planets}) => {

    if (planets.isFetching) {
        return (<span>Loading...</span>);
    }

    return (
        <ul className="PlanetList-items">
            {planets.items.map(planet => (
                <li key={planet.name}>{planet.name}</li>
            ))}
        </ul>
    );
};

export default PlanetList;
