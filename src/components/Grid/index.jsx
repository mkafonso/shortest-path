import React, { Component } from 'react';

// import styles
import './styles.scss';

// import components
import Node from '../Node';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = [];

    for (let row = 0; row < 20; row++) {
      const currentRow = [];

      for (let column = 0; column < 50; column++) {
        const currentNode = {
          row,
          column,
          startNode: row === 10 && column === 5,
          endNode: row === 10 && column === 45,
        };

        currentRow.push(currentNode);
      }

      nodes.push(currentRow);
    }

    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;

    return (
      <div className="grid">
        {nodes.map((row, index) => {
          return (
            <div key={index}>
              {row.map((node, index) => {
                const { startNode, endNode } = node;

                return (
                  <Node key={index} startNode={startNode} endNode={endNode} />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
