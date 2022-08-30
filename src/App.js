import Tile from "./components/Tile";
import { useState } from 'react'
import "./App.css";

function App() {
  const [tiles, setTiles] = useState(generateGrid())
  
  function generateGrid() {
    console.log("generate new grid");
    let tiles = [];
    let rowTiles = [];
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 20; j++) {
        rowTiles.push({ x: j, y: i, color: true });
      }
      tiles.push(rowTiles);
      rowTiles = [];
    }
    return tiles
  }

  return (
    <div className="App">
      <header tabIndex="0" className="App-header" onKeyDown={(e) => e.key === " " && setTiles(generateGrid())}>
        {tiles.map((tileRow) => {
          return (
            <div key={`row-${tileRow[0].y}`}>
              {tileRow.map((tile) => {
                return <Tile key={`${tile.x}-${tile.y}`} x={tile.x} y={tile.y} color={tile.color} />;
              })}
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
