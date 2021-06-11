import {BurgerMenu} from "./BurgerMenu";
import './sidebar.scss'
import {useState} from "react";

export const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className={`sidebar ${!isMenuOpen && 'close'}`}>
                <BurgerMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
        </div>
    )
}