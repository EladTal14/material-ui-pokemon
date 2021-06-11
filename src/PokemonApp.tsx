import React, {useEffect, useState} from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import {PokemonList} from "./components/pokemonList/PokemonList";
import {Favourites} from "./components/favourites/Favourites";
import {getItemFromStorage, SetItemToStorage} from "./services/localStorage";
import {getPokemons} from "./services/api";
import {Sidebar} from "./components/sideBar/Sidebar";

export const PokemonApp = () => {
    const [pokemons, setPokemons] = useState<any>([])
    const [nextUrlPokemons, setNextUrlPokemons] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20')
    const [prevUrlPokemons, setPrevUrlPokemons] = useState<string>(nextUrlPokemons)
    const [favourites, setFavourites] = useState<any>([])
    useEffect(() => {
        const getpokesFromStorage = getItemFromStorage('pokemons')
        if (!getpokesFromStorage || nextUrlPokemons === prevUrlPokemons) {
            (async function () {
                // @ts-ignore
                const {pokes, next} = await getPokemons(nextUrlPokemons)
                SetItemToStorage('pokemons', pokes)
                setPokemons(pokes)
                setPrevUrlPokemons(nextUrlPokemons)
                setNextUrlPokemons(next)
            })()
        } else {
            setPokemons(getpokesFromStorage)
        }
    }, [nextUrlPokemons,prevUrlPokemons]);
    useEffect(() => {
        const favsFromStorage = getItemFromStorage('favourites')
        if (favsFromStorage) {
            setFavourites(favsFromStorage)
        }
    }, []);

    const handleFavourites = (pokemon: any) => {
        const isPokemonInFavs = favourites.find((favourite: any) => favourite.id === pokemon.id)
        if (!isPokemonInFavs) {
            SetItemToStorage('favourites', [...favourites, {...pokemon}])
            setFavourites(getItemFromStorage('favourites'))
        }
    }
    const handleRemoveFavourites = (id: number) => {
        const newFavs = getItemFromStorage('favourites').filter((fav: any) => fav.id !== id)
        SetItemToStorage('favourites', newFavs)
        setFavourites(getItemFromStorage('favourites'))
    }
    const reorder = (list: any, startIndex: any, endIndex: any) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }
    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        const items: any = reorder(
            pokemons,
            result.source.index,
            result.destination.index
        );
        setPokemons(items);
    }
    return (
        <div>
            <Sidebar/>

            {pokemons && pokemons.length === 0 ? <div>wait...</div> :
                <div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <PokemonList pokemons={pokemons} handleFavourites={handleFavourites}/>
                    </DragDropContext>
                    <button className="see-more" onClick={() => setPrevUrlPokemons(nextUrlPokemons)}>See more pokes
                    </button>
                    <Favourites favourites={favourites} handleRemoveFavourites={handleRemoveFavourites}/>
                </div>
            }
        </div>
    );
};
