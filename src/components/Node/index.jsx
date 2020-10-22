import React, { Component } from 'react';

// import styles
import './styles.scss';

export default class Node extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { startNode, endNode } = this.props;
    const setActualNodeState = startNode
      ? 'start-node'
      : endNode
      ? 'end-node'
      : '';

    return <div className={`node ${setActualNodeState}`}></div>;
  }
}

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
