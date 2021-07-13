import { useState, useEffect, useRef } from "react";
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
	const [theme, setTheme] = useState("light");
	const copyRef = useRef();

	useEffect(() => {
		const rawHtml = marked(text);
		const sanitizedHtml = DOMPurify.sanitize(rawHtml);

		setHtml(sanitizedHtml);
	}, [text]);

	const changeText = (changedText) => {
		setText(changedText);
	};

	const changeTheme = () => {
		if (theme === "light") setTheme("dark");
		else setTheme("light");
	};

	return (
		<main>
			<Input
				copyRef={copyRef}
				initialValue={text}
				changedText={changeText}
				changeTheme={changeTheme}
				themeVal={theme}
			/>

			<Output innerHtml={html} themeVal={theme} />
		</main>
	);
};

export default TextArea;
