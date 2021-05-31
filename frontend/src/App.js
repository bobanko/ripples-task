import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const defaultImgCount = 1;
  const maxImgCount = 10;

  const [imgCount, setImgCount] = useState(defaultImgCount);

  function increaseImgCount() {
    if (imgCount >= maxImgCount) return;

    setImgCount(imgCount + 1);
  }
  function decreaseImgCount() {
    if (imgCount <= defaultImgCount) return;

    setImgCount(imgCount - 1);
  }

  function resetImgCount() {
    setImgCount(defaultImgCount);
  }

  return (
    <div className="App">
      <header>
        <button onClick={increaseImgCount}>➕</button>
        <button onClick={decreaseImgCount}>➖</button>
        <button onClick={resetImgCount}>⏺ reset</button>
      </header>

      {Array(imgCount)
        .fill(0)
        .map((_, index) => (
          // in this case using array index as a key is fine
          <img key={index} src={logo} className="App-logo" alt="logo" />
        ))}
    </div>
  );
}

export default App;
