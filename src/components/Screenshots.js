import React from 'react';
import './Screenshots.css';

function Screenshots() {
  return (
    <section id="screenshots" className="screenshots">
      <h2>Screenshots</h2>
      <div className="screenshot-container">
   
        <div className="screenshot-placeholder"> <img src="./img/login.png" alt="Zymo log-img" className="screenshot-img" /></div>
        <div className="screenshot-placeholder"><img src="./img/realtime.png" alt="Zymo log-img" className="screenshot-img" /></div>
        <div className="screenshot-placeholder"><img src="./img/Authenticate.png" alt="Zymo log-img" className="screenshot-img" /></div>
      </div>
    </section>
  );
}

export default Screenshots;
