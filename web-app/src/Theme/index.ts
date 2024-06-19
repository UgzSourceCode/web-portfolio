// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors.ts";
import { ButtonStyle } from "./components/button.ts";

export const theme = extendTheme({
	components: {
		Button: ButtonStyle,
	},
	colors,
});
