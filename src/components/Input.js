import "../css/input.css";
import copy from "../img/copy.svg";
import cross from "../img/cross.svg";

const Input = ({ initialValue, changedText }) => {
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

			<button
				id="copy-btn"
				className="action-btn"
				title="Copy text"
				onClick={copyText}
			>
				<img src={copy} alt="Copy text" />
			</button>
		</div>
	);
};

export default Input;
