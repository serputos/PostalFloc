//Plantilla per a un Floc
export function Floc({ x, y }) {
  return (
    <span style={{ left: `${x}%`, top: `${y}%` }} className="floc">
      ❄️
    </span>
  );
}
