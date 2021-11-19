import React from 'react';
import './App.css';
import { Score } from './features/counter/board/score/Score';
import { Board } from './features/counter/board/Board';
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from './features/counter/board/boardSlice';


const App = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(setBoard());
  };

  const tryAgainHandler = () => {
    dispatch(resetCards());
  };


  return (
    <div className="App">
      <Score />
      <Board />
      <footer>
        <button>
          Start Game
        </button>
        <button>
          Try New Pair
        </button>
      </footer>
    </div>
  )
};

export default App;
