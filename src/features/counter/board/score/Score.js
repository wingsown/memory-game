import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatchedIds } from '../boardSlice';

export const Score = () => {
    
    const cardsMatched = useSelector(selectMatchedIds);

    return (
        <div
        className="score-container"
        >
            Matched:{cardsMatched.length}
        </div>
    );
};