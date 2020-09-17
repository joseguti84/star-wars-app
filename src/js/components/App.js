import React, {useEffect} from 'react';
import './App.css';
import PlanetList from "./PlanetList";
import {connect} from "react-redux";
import {getPlanets} from "../actions/index";

const App = ({getPlanets, planets}) => {

    useEffect(() => {
        getPlanets();
    }, []);

    console.log(planets);

    return (
        <div className="App">
            <header className="App-header">
                <h1>The Star Wars App</h1>
            </header>
            <PlanetList
                planets={planets}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    planets: state.planets
});

const mapDispatchToProps = {
    getPlanets
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
