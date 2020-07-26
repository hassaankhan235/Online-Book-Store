import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/SignInSignUp'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/userActions'
import Checkout from './pages/checkout'; 


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
       if(user){
         const {displayName,email,uid} = user
        const userRef = await createUserProfileDocument(displayName, email, uid)
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            user: {
              id : snapShot.id,
              ...snapShot.data()
            }  
          }, () => { console.log('New state is',this.state)})
        })
       }
       else{
         this.props.setCurrentUser(user)
       }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
  return (
   <div>
   <Header />
   <Switch>
    <Route exact path='/' component= { HomePage } />
    <Route exact path='/history'   component={ ShopPage } />
    <Route exact path='/politics'  component={ ShopPage } />
    <Route exact path='/politics'  component={ ShopPage } />
    <Route exact path='/classics'  component={ ShopPage } />
    <Route exact path='/childeren' component={ ShopPage } />
    <Route exact path='/education' component={ ShopPage } />
    <Route exact path='/biography' component={ ShopPage } />
    <Route exact path='/signIn' render={()=>this.props.user ? <Redirect to='/' /> : <SignInSignUp />} />
    <Route exact path='/checkout'  component={ Checkout } />
   </Switch>
   </div>
  );
}
}

const mapStateToProps = (state) => ({
  user : state.user.user
})

const mapDispatchToProps = (dispatch) => {
  return{
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
