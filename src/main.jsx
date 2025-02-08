import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,

)
//  npm i @chakra-ui/react @emotion/react 

// npx @chakra-ui/cli snippet add