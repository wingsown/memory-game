import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIds, flipCard, selectMatchedIds, resetCards } from '../../boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
    
    const dispatch = useDispatch();
    const visibleIds = useSelector(selectVisibleIds);
    const matchedIds = useSelector(selectMatchedIds);

    // Flip Card Action
    const flipHandler = (id) => {
        dispatch(flipCard(id));
    };

    const tryAgainHandler = () => {
        dispatch(resetCards());
      };

    let cardStyle = 'resting';
    let click = () => flipHandler(id);

    let cardText = (
        <img 
        src={cardLogo}
        className="logo-placeholder"
        alt="Card option"
        />
    );

    if (visibleIds.includes(id) || matchedIds.includes(id)) {
        cardText = contents;
        click = () => {};
    }


    if (matchedIds.includes(id)) {
        cardStyle = 'matched';
    }

    if (visibleIds.length === 2) {
        click = tryAgainHandler;
    }

    return (
        <button 
        onClick={click}
        className={`card ${cardStyle}`}>
            {cardText}
        </button>
    );
};