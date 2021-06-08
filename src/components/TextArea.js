import { useState, useEffect } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Input from "./Input";
import Output from "./Output";
import "../css/textarea.css";
import "../css/highlight.css";
import initialText from "../util/initialText";

marked.setOptions({
	xhtml: true,
	highlight: (code, lang) => {
		const hljs = require("highlight.js");
		const language = hljs.getLanguage(lang) ? lang : "plaintext";
		return hljs.highlight(code, { language }).value;
	}
});

const TextArea = () => {
	const [text, setText] = useState(initialText);
	const [html, setHtml] = useState();

	useEffect(() => {
		const rawHtml = marked(text);
		const sanitizedHtml = DOMPurify.sanitize(rawHtml);

		setHtml(sanitizedHtml);
	}, [text]);

	const changeText = (changedText) => {
		setText(changedText);
	};

	return (
		<main>
			<Input initialValue={text} changedText={changeText} />

			<Output innerHtml={html} />
		</main>
	);
};

export default TextArea;
