import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

const rootContainer = document.getElementById("root");
if (rootContainer) {
	ReactDOM.createRoot(rootContainer).render(
		<React.StrictMode>
			<App/>
		</React.StrictMode>,
	);
}