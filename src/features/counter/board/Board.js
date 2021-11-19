import React from 'react';
import { CardRow } from './cardRow/CardRow';
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

    let content = [];
    for (let row=0; row < rows; row++) {
        const rowCards = getRowCards(row);
        content.push(
            
        )
    }
}