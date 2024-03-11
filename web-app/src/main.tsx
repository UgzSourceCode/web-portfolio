import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

const rootContainer = document.getElementById("root");
if (rootContainer) {
	ReactDOM.createRoot(rootContainer).render(
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</React.StrictMode>,
	);
}
