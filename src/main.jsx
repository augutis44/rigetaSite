import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from "./colorPalete";
import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
)
