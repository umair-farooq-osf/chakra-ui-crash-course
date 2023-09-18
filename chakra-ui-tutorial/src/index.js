import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import customTheme from "./extendTheme";

const theme = extendTheme({ customTheme })

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
