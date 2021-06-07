import "../css/editor.css";

const Output = ({ innerHtml }) => {
	const setOutput = () => {
		if (innerHtml) return { __html: innerHtml };
		else return { __html: "<h4>Enter some text!</h4>" };
	};

	return (
		<div className="editor">
			<h2 className="editor-title">Output</h2>

			<div
				id="output"
				title="Output"
				dangerouslySetInnerHTML={setOutput()}
			></div>
		</div>
	);
};

export default Output;
