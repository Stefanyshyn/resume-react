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
import PersonalProfilePage from './pages/PersonalProfilePage';
//layouts
import AuthLayout from './layouts/AuthLayout'; 
import MainLayout from './layouts/MainLayout';

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
          exact
          render={(props) => (
            <MainLayout {...props}> 
              <PersonalProfilePage {...props}/>
            </MainLayout>
          )}
        />
        <Route
          path="/profile/:username"
          exact
          render={(props) => (
            <MainLayout {...props}>
               <ProfilePage {...props}/>
            </MainLayout>
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <MainLayout {...props}>
              <Test {...props}/>
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
