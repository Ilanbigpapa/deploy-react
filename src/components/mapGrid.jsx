import React, { Component } from "react";

class MapGrid extends Component {
  render() {
    const { rows, columns } = this.props;

    return (
      <div>
        <div
          className="grid-container"
          style={{ gridTemplateColumns: "auto ".repeat(columns) }}
        >
          {this.props.grid.flatMap(row =>
            row.map(item => (
              <div className="grid-item" style={this.getItemStyle(item)}></div>
            ))
          )}
        </div>
      </div>
    );
  }

  getItemStyle(value) {
    const colors = [
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Blue",
      "Brown",
      "CadetBlue",
      "DarkCyan"
    ];
    let color = "white";
    if (value === 1) {
      color = "black";
    } else if (value > 1) {
      color = colors[value % colors.length];
    }

    return { backgroundColor: color };
  }
}

export default MapGrid;
