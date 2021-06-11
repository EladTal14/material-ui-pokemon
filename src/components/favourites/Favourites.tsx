import './favourites.scss'
import React, {useState} from "react";
import {FavouriteCard} from "./FavouriteCard";
import {Modal} from "../modal/Modal";

interface IFavourites {
    favourites: any,
    handleRemoveFavourites: Function
}

export const Favourites: React.FC<IFavourites> = ({favourites, handleRemoveFavourites}) => {
    const [isModalShown, setIsModalShown] = useState(false)
    const handleModalShown = () => {
        setTimeout(() => {
            setIsModalShown(true)
            setTimeout(() => setIsModalShown(false), 3000)
            }, 0
        )
    }
    return (
        <div className="favourites">
            <h2 className="favourites-title">My favourites</h2>
            <Modal isModalShown={isModalShown}/>
            <div className="favourites-list-container">
                {favourites.map((favourite: any) => {
                    return (
                        <FavouriteCard key={favourite.id} favourite={favourite} handleModalShown={handleModalShown}
                                       handleRemoveFavourites={handleRemoveFavourites}/>
                    )
                })}
            </div>
        </div>
    )
}