import "../css/output.css";

const Output = ({ innerHtml }) => {
	const setOutput = () => {
		if (innerHtml) return { __html: innerHtml };
		else return { __html: "<h2>Enter some text!</h2>" };
	};

	return (
		<div className="output-area">
			<h2 className="output-area-title">Output</h2>

			<div
				id="output"
				title="Output"
				dangerouslySetInnerHTML={setOutput()}
			></div>
		</div>
	);
};

export default Output;
