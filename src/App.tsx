import "./App.css";

type Tyle = "X" | "-" | "T" | "U" | "C";

const map: Array<Array<Tyle>> = [
  ["-", "-", "-", "-", "-", "U", "-", "-", "-", "-"],
  ["X", "X", "-", "-", "T", "U", "-", "-", "-", "-"],
  ["X", "X", "X", "-", "-", "U", "T", "T", "-", "-"],
  ["X", "X", "X", "-", "-", "U", "T", "T", "-", "-"],
  ["X", "-", "X", "-", "-", "U", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "U", "U", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "U", "-", "T", "-"],
  ["-", "-", "-", "-", "-", "-", "U", "-", "-", "-"],
  ["X", "-", "-", "-", "-", "-", "U", "-", "-", "-"],
  ["X", "X", "-", "-", "-", "-", "U", "-", "-", "-"],
];

function Tyle({ variant }: { variant: Tyle }) {
  if (variant === "X") {
    return <div className="tyle tyle--rock" />;
  }
  if (variant === "U") {
    return <div className="tyle tyle--water" />;
  }
  if (variant === "C") {
    return <div className="tyle tyle--cow" />;
  }
  if (variant === "T") {
    return <div className="tyle tyle--tree" />;
  }
  return <div className="tyle tyle--grass" />;
}

function App() {
  return map.map((row) => (
    <div className="row">
      {row.map((cell) => (
        <Tyle variant={cell} />
      ))}
    </div>
  ));
}

export default App;
