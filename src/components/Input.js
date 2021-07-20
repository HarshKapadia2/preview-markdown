import { useState, useEffect, useRef } from "react";
import "../css/input.css";
import copy from "../img/copy.svg";
import cross from "../img/cross.svg";
import moon from "../img/moon.svg";
import sun from "../img/sun.svg";

const Input = ({ initialValue, changedText, changeTheme, themeVal }) => {
	const copyRef = useRef();

	const textChangeAction = () => {
		const clearBtn = document.querySelector("#clear-btn");
		const copyBtn = document.querySelector("#copy-btn");
		const newText = document.querySelector("#input").value;

		changedText(newText);

		if (newText === "") {
			clearBtn.style.display = "none";
			copyBtn.style.display = "none";
		} else {
			clearBtn.style.display = "block";
			copyBtn.style.display = "block";
		}
	};

	const copyText = () => {
		const textArea = document.querySelector("#input");

		textArea.select();
		textArea.setSelectionRange(0, textArea.value.length); // Fallback for mobile

		document.execCommand("copy");
	};

	const copyPopUp = () => {
		copyRef.current.style.display = "block";

		setTimeout(function () {
			copyRef.current.style.display = "none";
		}, 2000);
	};

	const copyActions = () => {
		copyText();
		copyPopUp();
	};

	const clearText = () => {
		const textArea = document.querySelector("#input");

		textArea.value = "";
		textChangeAction();
	};

	return (
		<div className="input-area">
			<h2 className="input-area-title">Input</h2>

			<textarea
				title="Input"
				id="input"
				className={themeVal === "light" ? "" : "dark"}
				defaultValue={initialValue}
				onChange={textChangeAction}
				placeholder="## Enter some text!"
			></textarea>

			<button
				id="clear-btn"
				className="action-btn"
				title="Clear text"
				onClick={clearText}
			>
				<img src={cross} alt="Clear text" />
			</button>

			<div
				ref={copyRef}
				id="popup-notification"
				className="popup-window popup-div rounded"
			>
				<small>Copied!</small>
			</div>

			<button
				id="copy-btn"
				className="action-btn"
				title="Copy text"
				onClick={copyActions}
			>
				<img src={copy} alt="Copy text" />
			</button>

			<button
				id="theme-btn"
				className="action-btn"
				title="Change theme"
				onClick={changeTheme}
			>
				<img
					src={themeVal === "light" ? moon : sun}
					alt="Change theme"
				/>
			</button>
		</div>
	);
};

export default Input;
