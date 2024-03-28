import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AppLayout } from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme";

import "./i18n.ts";

const rootContainer = document.getElementById("root");
if (rootContainer) {
	ReactDOM.createRoot(rootContainer).render(
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<Suspense fallback="Loading...">
					<AppLayout />
				</Suspense>
			</ChakraProvider>
		</React.StrictMode>,
	);
}
