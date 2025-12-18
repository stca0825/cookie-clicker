import { useState } from "react";
import "./App.css";
export default function CookieClicker() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <div className="cookie-clicker">
      <h1>Cookie Clicker</h1>

      <button onClick={handleClick} className="cookie-button">
        <img
          src="../public/cookie-1.png"
          alt="Cookie"
          width={150}
          height={150}
        />
      </button>

      <h2>Score: {score}</h2>
    </div>
  );
}

export function App() {
  return <CookieClicker />;
}
