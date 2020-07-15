import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import Header from './components/header/Header'
import SignInSignUp from './pages/SignInSignUp'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends Component {
  constructor(){
    super()
    this.state = {
      user : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
       if(user){
         const {displayName,email,uid} = user
        const userRef = await createUserProfileDocument(displayName, email, uid)
        userRef.onSnapshot(snapShot => {
          this.setState({
            user: {
              id : snapShot.id,
              ...snapShot.data()
            }  
          }, () => { console.log('New state is',this.state)})
        })
       }
       else{
         this.setState({user:user})
       }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
  return (
   <div>
   <Header user={this.state.user} />
   <Switch>
    <Route exact path='/' component= { HomePage } />
    <Route exact path='/history' component={ ShopPage } />
    <Route exact path='/signIn' component={SignInSignUp} />
   </Switch>
   </div>
  );
}
}

export default App;
