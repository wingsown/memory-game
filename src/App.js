import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();


  return (
    <div className="App">
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
}

export default App;
