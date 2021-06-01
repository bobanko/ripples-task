import { useState, useEffect } from "react";

import "./App.css";

import logo from "./images/logo.svg";
import sessionService from "./session.service";

function App() {
  console.log("first init");

  const defaultImgCount = 3;
  const maxImgCount = 100;
  const rowSize = 5;

  const [sessionId, setSessionId] = useState(null);

  const [imgCount, setImgCount] = useState(defaultImgCount);

  useEffect(() => {
    sessionService.getSessionId().then(_sessionId => {
      setSessionId(_sessionId);
    });
  }, []);

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

  const mtx = [];

  return (
    <div className="App">
      <h1>🌁 image gallery [{imgCount}]</h1>
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
      </header>

      <section className="img-container">
        {Array(imgCount)
          .fill(0)
          .map((_, index) => (
            // in this case using array index as a key is fine
            <img key={index} src={logo} className="img" alt="tile" />
          ))}
      </section>

      <div className="debug-placeholder">
        <div className="session-info">sessionId:{sessionId}</div>
      </div>
    </div>
  );
}

export default App;
