import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route
          path="/sign-in"
        >
          <LoginPage isLogin={true}/>
        </Route>
        <Route
          path="/sign-up"
        >
          <LoginPage isLogin={false}/>
        </Route>
        <Route
          path="/"
        >
          <div>Home</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
