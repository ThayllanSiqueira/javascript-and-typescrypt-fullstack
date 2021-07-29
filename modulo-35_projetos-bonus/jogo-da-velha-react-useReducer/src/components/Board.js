import React, { useContext, useEffect } from 'react';
import uuid from 'uuid/dist/v4';

import { GameContext } from '../contexts/GameContext';
import Player from './Player';
import Winner from './Winner';
import Reset from './Reset';
import History from './History';
import Square from './Square';
import calculateWinner from '../utils/calculateEinner';

export default function Board() {
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      dispatch({ type: 'UPDATE_WINNER', payload: winner });
    }
  }, [history, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>
      <History />
    </div>
  );
}
