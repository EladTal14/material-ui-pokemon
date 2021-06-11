import './pokemonList.scss'
import {PokemonCard} from "./PokemonCard";
import {Droppable} from 'react-beautiful-dnd'

export interface IPokemonList {
    pokemons: any;
    handleFavourites: Function;
}

export const PokemonList: React.FC<IPokemonList> = ({pokemons, handleFavourites}) => {
    return (
        <div className="pokemon-list">
            <h2 className="pokemon-list-title">All Pokemon Data</h2>
            <Droppable droppableId='num' direction="horizontal">
                {provided => (
                    <div className="pokemon-list-container"
                         {...provided.droppableProps}
                         ref={provided.innerRef}>
                        {pokemons.map((pokemon: any, index: number) => {
                            return (<PokemonCard key={pokemon.id} pokemon={pokemon} index={index}
                                                 handleFavourites={handleFavourites}/>)
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

        </div>

    );
};

