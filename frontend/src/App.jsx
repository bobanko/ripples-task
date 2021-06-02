import { useState, useEffect } from "react";

import "./App.css";

import logo from "./images/logo.png";
import sessionService from "./session.service";

function App() {
  console.log("render");

  const minImgCount = 0;
  const maxImgCount = 100;
  const defaultImgCount = 3;
  const rowSize = 5;

  const [sessionId, setSessionId] = useState(null);

  const [imgCount, setImgCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    sessionService.getSessionId().then(async _sessionId => {
      const session = await sessionService.getSession(_sessionId);

      setSessionId(session._id);
      setImgCount(session.counter);
    });
  }, []);

  function updateImgCount(_imgCount) {
    setIsLoading(true);
    return sessionService
      .updateSession({ sessionId, counter: _imgCount })
      .then(sessionData => {
        setImgCount(+sessionData.counter);
        setIsLoading(false);
      });
  }

  function increaseImgCount() {
    if (imgCount >= maxImgCount) return;

    updateImgCount(imgCount + 1);
  }

  function decreaseImgCount() {
    if (imgCount <= minImgCount) return;

    updateImgCount(imgCount - 1);
  }

  function resetImgCount() {
    updateImgCount(defaultImgCount);
  }

  const mtx = [];

  return (
    <div className="App">
      <h1>🌁 image gallery [{imgCount}]</h1>
      <header className="p-2">
        <button
          className="m-1"
          disabled={imgCount >= maxImgCount || isLoading}
          onClick={increaseImgCount}
        >
          ➕
        </button>
        <button
          className="m-1"
          disabled={imgCount <= minImgCount || isLoading}
          onClick={decreaseImgCount}
        >
          ➖
        </button>
        <button className="m-1" disabled={isLoading} onClick={resetImgCount}>
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
