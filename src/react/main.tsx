import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
// import ReactDOMClient from 'react-dom/client';

import './index.css'
import App from './App'

const rootElement:HTMLElement = document.getElementById("root") as HTMLElement
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)