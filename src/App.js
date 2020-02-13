import React, { Component } from "react";
import MapGrid from "./components/mapGrid";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { dimensions: "", rows: 0, columns: 0, phase: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSolve = this.handleSolve.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleRestart() {
    const restartGridObject = {
      rows: 0,
      columns: 0,
      grid: [],
      phase: 0,
      islands: 0
    };
    this.setState(restartGridObject);
  }
  handleSolve() {
    const { rows, columns, grid } = this.state;
    let clonedGrid = grid.map(row => [...row]);
    let index = 1;
    for (let i = 0; i < clonedGrid.length; i++) {
      for (let j = 0; j < clonedGrid[i].length; j++) {
        if (clonedGrid[i][j] === 1) {
          index++;
          clonedGrid[i][j] = index;
          this.BFS(i, j, index, clonedGrid);
        }
      }
    }
    this.setState({ grid: clonedGrid, phase: 2, islands: index - 1 });
  }

  BFS(i, j, index, grid) {
    let queue = [];
    const horizontalStep = [-1, -1, -1, 0, 1, 0, 1, 1];
    const verticalStep = [-1, 1, 0, -1, -1, 1, 0, 1];
    let startPoint = { x: i, y: j };
    queue.push(startPoint);
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current);
      for (let k = 0; k < horizontalStep.length; k++) {
        if (
          this.isSafe(
            current.x + horizontalStep[k],
            current.y + verticalStep[k],
            grid
          )
        ) {
          grid[current.x + horizontalStep[k]][
            current.y + verticalStep[k]
          ] = index;
          queue.push({
            x: current.x + horizontalStep[k],
            y: current.y + verticalStep[k]
          });
        }
      }
    }
  }

  isSafe(x, y, grid) {
    return (
      x >= 0 &&
      x < grid.length &&
      y >= 0 &&
      y < grid[x].length &&
      grid[x][y] === 1
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    const arr = this.state.dimensions.split(",");
    const rows = parseInt(arr[0]);
    const columns = parseInt(arr[1]);

    let grid = [];
    for (let i = 0; i < rows; i++) {
      grid[i] = Array.from({ length: columns }, () =>
        Math.round(Math.random())
      );
    }

    let gridObject = {
      rows,
      columns,
      grid,
      phase: 1
    };
    this.setState(gridObject);
  }

  render() {
    return (
      <div>
        {this.state.phase === 0 && (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="dimensions">Please enter bitmap size</label>
              <input
                required
                type="text"
                className="form-control"
                value={this.state.dimensions}
                name="dimensions"
                placeholder="Bitmap size:n,m"
                pattern="+[1..9]*[0..9],+[1..9]*[0..9]"
                onChange={this.handleChange}
              ></input>
              <input
                type="submit"
                className="btn btn-primary"
                value="Randomize"
              ></input>
            </div>
          </form>
        )}
        {this.state.phase !== 0 && (
          <MapGrid
            rows={this.state.rows}
            columns={this.state.columns}
            grid={this.state.grid}
          />
        )}
        {this.state.phase === 1 && (
          <button className="btn btn-primary m-2" onClick={this.handleSolve}>
            Solve
          </button>
        )}
        {this.state.phase === 2 && (
          <div>
            <button
              className="btn btn-primary m-2"
              onClick={this.handleRestart}
            >
              Restart
            </button>
            <p> number off islands: {this.state.islands} </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
