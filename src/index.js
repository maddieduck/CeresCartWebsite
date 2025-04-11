import React from 'react';
import ReactDOM from 'react-dom/client';
import TopLevel from './ReuseCode/extension/TopLevel'

window.mountReactApp = (url) => {
  const root = document.getElementById('react-root');
  ReactDOM.createRoot(root).render(<TopLevel url={url} />);
};
