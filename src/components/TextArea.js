import { useState, useEffect } from "react";
import marked from "marked";
import Input from "./Input";
import Output from "./Output";
import "../css/textarea.css";
import initialText from "../util/initialText";

marked.setOptions({
	xhtml: true
});

const TextArea = () => {
	const [text, setText] = useState(initialText);
	const [html, setHtml] = useState();

	useEffect(() => {
		setHtml(marked(text));
	}, [text]);

	const changeText = (changedText) => {
		setText(changedText);
	};

	return (
		<main>
			<Input initialvalue={text} changedText={changeText} />

			<Output innerHtml={html} />
		</main>
	);
};

export default TextArea;
