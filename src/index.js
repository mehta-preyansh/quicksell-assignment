import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GroupingAndOrderingProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GroupingAndOrderingProvider>
      <App />
    </GroupingAndOrderingProvider>
  </React.StrictMode>
);

