import { useState } from "react";

import "./App.css";

import logo from "./images/logo.svg";

function App() {
  const defaultImgCount = 3;
  const maxImgCount = 100;

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
      <header className="p-2">
        <button
          className="m-1"
          disabled={imgCount >= maxImgCount}
          onClick={increaseImgCount}
        >
          ➕
        </button>
        <button
          className="m-1"
          disabled={imgCount <= defaultImgCount}
          onClick={decreaseImgCount}
        >
          ➖
        </button>
        <button className="m-1" onClick={resetImgCount}>
          🔄 reset to {defaultImgCount}
        </button>

        <span className="m-1">images: {imgCount}</span>
      </header>

      <section className="img-container">
        {Array(imgCount)
          .fill(0)
          .map((_, index) => (
            // in this case using array index as a key is fine
            <img key={index} src={logo} className="img" alt="image" />
          ))}
      </section>
    </div>
  );
}

export default App;
