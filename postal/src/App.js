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
  return { x: -20 + Math.random() * 120, y: Math.random() * -20 };
}

function moureFlocs(flocs) {
  return flocs.map((floc) => moureFloc(floc));
}

function moureFloc({ x, y }) {
  if (y >= window.innerHeight) {
    return {
      x: x + Math.random() * 2 - Math.random() * 2,
      y: -10 + Math.random() * 10,
    };
  } else {
    return {
      x: x + Math.random() * 2 - Math.random() * 2,
      y: y + Math.random() * 10,
    };
  }
}

export default function Nevada() {
  let [flocs, setFlocs] = useState(crearFlocs());
  // let [spawn, setSpawn] = useState(flocs);

  useEffect(() => {
    setInterval(() => {
      setFlocs((tots) => moureFlocs(tots));
    }, 70);
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
