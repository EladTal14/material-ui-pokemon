import React, {useEffect, useRef, useState} from 'react';
import {generateRandColor} from "../../services/util";
import {Draggable} from 'react-beautiful-dnd'

interface IPokemonCard {
    pokemon: any,
    handleFavourites: Function,
    index: number
}


export const PokemonCard: React.FC<IPokemonCard> = ({pokemon, handleFavourites, index}) => {
    const [currPic, setCurrPic] = useState(pokemon.sprites.front_default)
    const [indexPic, setIndexPic] = useState(0)
    const divStyle = {
        backgroundColor: generateRandColor()
    }
    const pictures = Object.values(pokemon.sprites).filter((pic) => pic !== null && typeof pic !== "object")
    useEffect(() => {
        if (pictures && pictures.length) {
            const intervalId = setInterval(() => {
                if (indexPic === pictures.length - 1) setIndexPic(0)
                else setIndexPic(indexPic + 1)
                setCurrPic(pictures[indexPic])
            }, 2000)
            return () => clearInterval(intervalId);
        }
    }, [currPic, indexPic])
    return (
        <Draggable draggableId={pokemon.name} index={index}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} >
                    <div
                         style={divStyle} key={pokemon.id} className="pokemon-card"
                         onClick={() => handleFavourites(pokemon)}>
                        <img src={currPic} alt="pokemon-pic"/>
                        <div className="card-desc">
                            <p>{pokemon.name}</p>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

