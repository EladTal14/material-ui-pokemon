import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {PokemonApp} from "./PokemonApp";
import {Route, Switch,} from "react-router-dom";
import {MaterialShit} from "./pages/material/MaterialShit";
import {Play} from "./pages/play/Play";

function App() {

    return (
        <div className="App">

            <Header/>
            <Switch>
                <Route exact path="/">
                    <PokemonApp/>
                </Route>
                <Route path="/material">
                    <MaterialShit />
                </Route>
                <Route path="/play">
                <Play/>
            </Route>

            </Switch>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
