import Save from "../../img/save.png";
import Edit from "../../img/edit.png";
import Trash from "../../img/trash.png";
import React, {useState} from "react";
import {findAndReplacePokemon} from "../../services/util";

interface IFavouritesCard {
    favourite: any,
    handleRemoveFavourites: Function,
    handleModalShown: Function

}

export const FavouriteCard: React.FC<IFavouritesCard> = ({favourite, handleRemoveFavourites, handleModalShown}) => {
    const [name, setName] = useState<string>(favourite.name)
    const [disableName, setDisableName] = useState<boolean>(true)

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }
    const handleEdit = (name: string) => {
        setDisableName(!disableName)
    }

    const handleSubmit = (e: any, favourite: any) => {
        e.preventDefault()
        findAndReplacePokemon(name, favourite)
        setDisableName(!disableName)
        handleModalShown()
    }

    return (
        <div key={favourite.id} className="pokemon-card">
            <img className="pokemon-icon" src={favourite.sprites.front_default} alt="pokemon"/>
            <div className="card-desc">
                <form>
                    <input disabled={disableName} value={name}
                           onChange={(e) => handleNameChange(e)}/>
                    <div className="actions">
                        <button className={`${disableName && 'not-visible'}`} type="submit"
                                onClick={(event) => handleSubmit(event, favourite)}><img
                            className="icon" src={Save} alt=""/></button>
                        <img className={`${!disableName && 'not-visible'} icon`} alt="edit" src={Edit}
                             onClick={() => handleEdit(favourite.name)}/>
                        <img className="icon" src={Trash} alt="trash"
                             onClick={() => handleRemoveFavourites(favourite.id)}/>
                    </div>

                </form>

            </div>
        </div>
    )
}