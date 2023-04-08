import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
// import theme from "./theme/theme"
import App from './App';
import "./index.css"
import 'antd/dist/reset.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
