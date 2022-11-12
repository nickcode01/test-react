 import React from 'react';
 import  ReactDOM from 'react-dom/client';
 import App from './routes/App';

//  ReactDOM.render(<App />, document.getElementById('app'));

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);