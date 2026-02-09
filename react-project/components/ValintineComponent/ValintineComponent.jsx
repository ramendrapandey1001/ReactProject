import React, { useState } from "react";
import Confetti from "react-confetti";
import "./ValintineComponent.css";

const ValintineComponent = () => {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState(null); // null means inline at start

  const moveNoButton = () => {
    const top = Math.floor(Math.random() * 70) + 20 + "%";
    const left = Math.floor(Math.random() * 70) + 15 + "%";
    setNoPosition({ top, left });
  };

  return (
    <div className="page-background">
      <div className="background">
        <span className="floating">❤️</span>
        <span className="floating">🎈</span>
        <span className="floating">💖</span>
        <span className="floating">🎈</span>
      </div>

      <div className="valentine-card" data-testid="ValintineComponent">
        {yesClicked && <Confetti />}
        
        {!yesClicked ? (
          <>
            <h1>Will you be my Valentine? ❤️</h1>
            <div className="button-row">
              <button className="yes-btn" onClick={() => setYesClicked(true)}>
                Yes
              </button>
              <button
                className="no-btn"
                style={noPosition ? { position: "absolute", ...noPosition } : {}}
                onMouseEnter={moveNoButton}
              >
                No
              </button>
            </div>
          </>
        ) : (
          <h1 className="happy-valentine">Happy Valentine ❤️</h1>
        )}
      </div>
    </div>
  );
};

export default ValintineComponent;