import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//for routing
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import User from './User';
import Visit from './Visit';
import NotFound from './NotFound';

///default 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const routing =(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/visit">Visit</Link></li>
      </ul>
    </div>
    <Routes >
      <Route exact path="/" element={<App/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path='/visit' element={<Visit/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </Router>
)

ReactDOM.render(routing,document.getElementById("root"));