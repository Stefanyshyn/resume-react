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
import CreateResumePage from './pages/CreateResumePage';

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
          path="/create-resume"
          exact
          render={(props) => (
            <MainLayout {...props}>
               <CreateResumePage resume={{id: "5d6fc2ed-b826-414c-8815-8bee03b7d67f"}} {...props}/>
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
