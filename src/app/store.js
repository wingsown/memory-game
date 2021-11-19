import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from '../features/board/boardSlice';

const rootReducer = combineReducers({
  board: boardReducer,
});

export const store = createStore(rootReducer);




