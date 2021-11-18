import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIds, flipCard, selectMatchedIds } from '../../boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
    
    const dispatch = useDispatch();
    const visibleIds = useSelector(selectVisibleIds);
    const matchedIds = useSelector(selectMatchedIds);
}