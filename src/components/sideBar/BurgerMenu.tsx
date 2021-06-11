import React from "react";

interface IBurgerMenu {
    isMenuOpen: boolean
    setIsMenuOpen: Function
}

export const BurgerMenu: React.FC<IBurgerMenu> = ({isMenuOpen, setIsMenuOpen}) => {

    return (
        <div className="menu " onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`line ${!isMenuOpen ? 'drop-down' : ''}`}></div>
            <div className={`line ${!isMenuOpen ? 'disappear' : ''}`}></div>
            <div className={`line ${!isMenuOpen ? 'go-up' : ''}`}></div>
        </div>
    )
}