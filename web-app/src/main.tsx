import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

import "./i18n.ts";

const rootContainer = document.getElementById("root");
if (rootContainer) {
	ReactDOM.createRoot(rootContainer).render(
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<Suspense fallback="Loading...">
					<App />
				</Suspense>
			</ChakraProvider>
		</React.StrictMode>,
	);
}
