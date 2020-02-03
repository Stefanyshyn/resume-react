import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/';
import Test from './pages/TestPage';
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
           <Test/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
