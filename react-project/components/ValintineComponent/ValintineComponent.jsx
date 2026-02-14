import React, { useState } from "react";
import Confetti from "react-confetti";
import "./ValintineComponent.css";

const ValintineComponent = () => {
	const [yesClicked, setYesClicked] = useState(false);
	const [noPosition, setNoPosition] = useState(null); // null means inline at start

	const moveNoButton = () => {
		const minDistance = 150; // pixels minimum movement
		let newTop, newLeft;
		let maxAttempts = 10;
		let attempts = 0;

		do {
			newTop = Math.floor(Math.random() * 70) + 20 + "%";
			newLeft = Math.floor(Math.random() * 70) + 15 + "%";


			// Convert % to pixels relative to viewport
			const topPx = (parseInt(newTop) / 100) * window.innerHeight;
			const leftPx = (parseInt(newLeft) / 100) * window.innerWidth;

			const currentTopPx = noPosition ? (parseInt(noPosition.top) / 100) * window.innerHeight : 0;
			const currentLeftPx = noPosition ? (parseInt(noPosition.left) / 100) * window.innerWidth : 0;

			const distance = Math.sqrt(
				Math.pow(topPx - currentTopPx, 2) + Math.pow(leftPx - currentLeftPx, 2)
			);
			// Repeat until distance is significant
			if (distance > minDistance) break;
			attempts++;
		} while (attempts < maxAttempts);

		setNoPosition({ top: newTop, left: newLeft });
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
								onTouchStart={(e) => {
									e.preventDefault();
									e.stopPropagation();
									moveNoButton();
								}}
								onClick={(e) => {
									e.preventDefault();         // stop click action
									e.stopPropagation();        // prevent bubbling
									moveNoButton();             // move instead of "click"
								}}
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