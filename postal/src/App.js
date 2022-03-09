import { useState, useEffect } from "react";
import "./App.css";
import { Floc } from "./Floc";
//dades
function crearFlocs() {
  return [
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),
  ];
}
function nouFloc() {
  return { x: Math.random() * 100 + 1, y: -10 };
}

function moureFlocs(flocs) {
  return flocs.map((floc) => moureFloc(floc));
}

function moureFloc({ x, y }) {
  return {
    x: x + Math.random() * 1.5 - Math.random() * 1.5,
    y: y + Math.random() * 2,
  };
}
function setSpawnTime() {
  return crearFlocs();
}

export default function Nevada() {
  let [flocs, setFlocs] = useState(crearFlocs());
  let [pos, setPos] = useState(nouFloc());

  useEffect(() => {
    setInterval(() => {
      setFlocs((tots) => moureFlocs(tots));
    }, 70);
  }, []);

  return (
    <div className="App">
      <div className="Display">
        {flocs.map((floc) => (
          <>
            <Floc x={floc.x} y={floc.y} />
          </>
        ))}
      </div>
    </div>
  );
}
