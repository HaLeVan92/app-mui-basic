import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "./theme";
import AuthProvider from "./auth/AuthProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  
  <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
  </BrowserRouter>
,
  
  
);