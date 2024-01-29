import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  fonts: {
    heading: `'Avenir', 'Gill Sans'`,
    body: `'Avenir', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;`,
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
