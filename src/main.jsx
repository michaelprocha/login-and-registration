import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
      		<GlobalStyles/>
			<App />
		</ThemeProvider>
	</StrictMode>
);
