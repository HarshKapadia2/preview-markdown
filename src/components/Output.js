import { useState } from "react";
import "../css/output.css";
import moon from "../img/moon.svg";
import sun from "../img/sun.svg";

const Output = ({ innerHtml }) => {
	const [theme, setTheme] = useState("light");

	const setOutput = () => {
		if (innerHtml) return { __html: innerHtml };
		else return { __html: "<h2>Enter some text!</h2>" };
	};

	const changeTheme = () => {
		if (theme === "light") setTheme("dark");
		else setTheme("light");
	};

	return (
		<div className="output-area">
			<h2 className="output-area-title">Output</h2>

			<div
				id="output"
				title="Output"
				className={theme === "light" ? "" : "dark"}
				dangerouslySetInnerHTML={setOutput()}
			></div>

			<button
				id="theme-btn"
				className="action-btn"
				title="Change theme"
				onClick={changeTheme}
			>
				<img src={theme === "light" ? moon : sun} alt="Change theme" />
			</button>
		</div>
	);
};

export default Output;
