import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles:{
        global: () => ({
            "*": {
                boxSizing: "border-box",
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont,"SegoeUI", Roboto, Oxygen, Ubuntu, Cantarell, "OpenSans", "HelveticaNeue", sans-serif',
            },
            body: {
                width: "100vw",
                minHeight: "100vh",
                margin: "0%",
                backgroundColor: "rgb(226 232 240 / 1)",
            },
            "#root": {
                width: "100%",
                minHeight: "100vh",
                heiht: "fit-content",
            },
        })
    }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <CSSReset />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
