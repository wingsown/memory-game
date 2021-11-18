import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoard } from './boardSlice';

export const Board = () => {

    const currentBoard = useSelector(selectBoard);

    const numberOfCards = currentBoard.length;
    const columns = 3;
    const rows = Math.floor(numberOfCards / columns);

    
}