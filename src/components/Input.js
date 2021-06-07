import "../css/editor.css";

const Input = ({ initialvalue, changedText }) => {
	const getChangedText = () => {
		const newText = document.querySelector("#input").value;
		changedText(newText);
	};

	return (
		<div className="editor">
			<h2 className="editor-title">Input</h2>

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
