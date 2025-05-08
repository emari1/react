import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const data = {
  name: 'Elijah Mari',
  imgUrl: 'https://i.kym-cdn.com/photos/images/original/002/217/409/e6a.jpg',
  hobbyList: ['guitar', 'videogames', 'sleeping']
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App user={data} />
  </React.StrictMode>
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
