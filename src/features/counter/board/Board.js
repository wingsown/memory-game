import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoard } from './boardSlice';

export const Board = () => {

    const currentBoard = useSelector(selectBoard);

    const numberOfCards = currentBoard.length;
    const columns = 3;
    const rows = Math.floor(numberOfCards / columns);

    const getRowCards = (row) => {
        const rowCards = [];
        for (let j=0; j<columns; j++) {
            const cardIndex = row * columns + j;
            rowCards.push(currentBoard[cardIndex]);
        }

        return rowCards;
    };

    
}