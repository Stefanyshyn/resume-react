import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
//pages
import LoginPage from './pages/LoginPage/';
import Test from './pages/TestPage';
import ProfilePage from './pages/ProfilePage';
//layouts
import AuthLayout from './layouts/AuthLayout'; 

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route
          path="/sign-in"
          render={(props) => (
            <AuthLayout {...props}>
              <LoginPage {...props} isLogin={true}/>
            </AuthLayout>
          )}
        />
        <Route
          path="/sign-up"
          render={(props) => (
            <AuthLayout {...props}>
              <LoginPage {...props} isLogin={false}/>
            </AuthLayout>
          )}
        />
        <Route
          path="/profile"
          render={(props) => (
            <AuthLayout {...props}>
              <ProfilePage {...props}/>
            </AuthLayout>
          )}
        />
        <Route
          path="/"
          component={Test}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
