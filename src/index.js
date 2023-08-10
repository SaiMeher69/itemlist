import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ItemList from './ItemList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemList />
  </React.StrictMode>
);
