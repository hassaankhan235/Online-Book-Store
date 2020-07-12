import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/SignInSignUp'

function App() {
  
  // const churpage = () => {
  //   return(
  //   <div>
  //   Hassaan Greater than any chay
  //   </div>
  //   )
  // }

  return (
   <div>
   <Header />
   <Switch>
    <Route exact path='/' component= { HomePage } />
    <Route exact path='/history' component={ ShopPage } />
    <Route exact path='/signIn' component={SignInSignUp} />
   </Switch>
   </div>
  );
}

export default App;
