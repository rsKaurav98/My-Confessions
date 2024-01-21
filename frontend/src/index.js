import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from  "react-router-dom";
import ConfessionProvider from './Context/ConfessionProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfessionProvider>
      <BrowserRouter>
   <ChakraProvider>
   <App />
   </ChakraProvider>
   </BrowserRouter>
  </ConfessionProvider>
  
 
);


