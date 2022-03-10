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
  return { x: Math.random() * 100 + 1, y: Math.random() * -20 };
}

function moureFlocs(flocs) {
  return flocs.map((floc) => moureFloc(floc));
}

function moureFloc({ x, y }) {
  if (y >= 100) {
    return {
      x: x + Math.random() * 1.5 - Math.random() * 1.5,
      y: -10 + Math.random() * 3,
    };
  } else {
    return {
      x: x + Math.random() * 1.5 - Math.random() * 1.5,
      y: y + Math.random() * 3,
    };
  }
}

export default function Nevada() {
  let [flocs, setFlocs] = useState(crearFlocs());
  // let [spawn, setSpawn] = useState(flocs);

  useEffect(() => {
    setInterval(() => {
      setFlocs((tots) => moureFlocs(tots));
    }, 50);
  }, []);

  /*useEffect(() => {
    setFlocs(flocs); // infinite loop
  }, [flocs]);
  console.log(setFlocs());*/

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
