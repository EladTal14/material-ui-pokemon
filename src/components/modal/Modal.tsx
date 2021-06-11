import React from 'react';
import './modal.scss'

interface IModal {
    isModalShown: boolean
}

export const Modal: React.FC<IModal> = ({isModalShown}) => {
    return (
        <div className={`modal-container ${isModalShown ? 'show success' : ''}`}>
            <p>Name changed successfully</p>
        </div>
    );
};

