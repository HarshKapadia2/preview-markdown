import "../css/input.css";

const Input = ({ initialvalue, changedText }) => {
	const getChangedText = () => {
		const newText = document.querySelector("#input").value;
		changedText(newText);
	};

	return (
		<div className="input-area">
			<h2 className="input-area-title">Input</h2>

			<textarea
				title="Input"
				id="input"
				defaultValue={initialvalue}
				onChange={getChangedText}
			></textarea>
		</div>
	);
};

export default Input;
