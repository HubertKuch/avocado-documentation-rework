import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.css";
import "./style/atom_theme.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Light as Syntax } from "react-syntax-highlighter";
import php from 'react-syntax-highlighter/dist/esm/languages/hljs/php';

Syntax.registerLanguage("php", php);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
