import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from './theme/default';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
);
