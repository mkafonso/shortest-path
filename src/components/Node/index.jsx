import React from 'react';

// import styles
import './styles.scss';

export default function Node(props) {
  const {
    col,
    endNode,
    startNode,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    row,
  } = props;

  const setActualNodeState = endNode
    ? 'end-node'
    : startNode
    ? 'start-node'
    : isWall
    ? 'node-wall'
    : '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${setActualNodeState}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
}
