import MainBar from "./components/mainBar";
import theme from "./colorPalete";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import MainPhoto from "./components/MainPhoto";
import MainBody from "./components/MainBody";
import { Box, StyledEngineProvider } from "@mui/material";
import Footer from "./components/Footer";

function App() {

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <MainBar />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <MainPhoto />
            <MainBody />
          </Box>
          <Footer />
        </StyledEngineProvider>
      </ThemeProvider>
    </React.StrictMode>
  );

}

export default App;
