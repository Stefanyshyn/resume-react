import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/';

function App() {
  return (
    <div className="container">
      <LoginPage isLogin={true}/>
    </div>
  );
}

export default App;
