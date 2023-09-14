import React from 'react'
import ReactDOM from 'react-dom/client'

import StyleGlobal from './styles/global'
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'

import { Routes } from './routes';
import { AuthProvider } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ThemeProvider theme={theme}>
    <StyleGlobal/>
    <AuthProvider>
    <Routes />
    </AuthProvider>
    </ThemeProvider>   

)
