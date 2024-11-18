import React from 'react';
import ReactDOM from 'react-dom/client';
import SidePanel from './SidePanel';
import './index.css';

const rootElement = document.createElement('div');
rootElement.className = 'container';
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SidePanel />
  </React.StrictMode>
);