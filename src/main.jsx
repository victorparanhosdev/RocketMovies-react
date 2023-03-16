import React from 'react'
import ReactDOM from 'react-dom/client'

import StyleGlobal from './styles/global'
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'

import { Routes } from './routes';
import { Profile } from './pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <StyleGlobal/>
    <Profile />
    </ThemeProvider>   
  </React.StrictMode>,
)
