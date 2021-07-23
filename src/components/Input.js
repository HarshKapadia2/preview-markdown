import { useRef } from "react";
import "../css/input.css";
import copy from "../img/copy.svg";
import cross from "../img/cross.svg";
import moon from "../img/moon.svg";
import sun from "../img/sun.svg";

const Input = ({ inputValue, changedText, changeTheme, themeVal }) => {
	const textAreaRef = useRef();
	const copyRef = useRef();
	const copyBtnRef = useRef();
	const clearBtnRef = useRef();

	const textChangeAction = () => {
		changedText(textAreaRef.current.value);

		if (textAreaRef.current.value === "") {
			copyBtnRef.current.style.display = "none";
			clearBtnRef.current.style.display = "none";
		} else {
			copyBtnRef.current.style.display = "block";
			clearBtnRef.current.style.display = "block";
		}
	};

	const copyText = () => {
		textAreaRef.current.select();
		textAreaRef.current.setSelectionRange(
			0,
			textAreaRef.current.value.length
		); // Fallback for mobile

		document.execCommand("copy");
	};

	const copyPopUp = () => {
		copyRef.current.style.display = "block";

		setTimeout(() => {
			copyRef.current.style.display = "none";
		}, 2000);
	};

	const copyActions = () => {
		copyText();
		copyPopUp();
	};

	const clearText = () => {
		textAreaRef.current.value = "";
		textChangeAction();
	};

	return (
		<div className="input-area">
			<h2 className="input-area-title">Input</h2>

			<textarea
				title="Input"
				id="input"
				ref={textAreaRef}
				className={themeVal === "light" ? "" : "dark"}
				value={inputValue}
				onChange={textChangeAction}
				placeholder="## Enter some text!"
			></textarea>

			<button
				id="clear-btn"
				ref={clearBtnRef}
				className="action-btn"
				title="Clear text"
				onClick={clearText}
			>
				<img src={cross} alt="Clear text" />
			</button>

			<div
				id="popup-notification"
				ref={copyRef}
				className="popup-window popup-div rounded"
			>
				<small>Copied!</small>
			</div>

			<button
				id="copy-btn"
				ref={copyBtnRef}
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
