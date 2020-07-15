import React, { Component } from 'react'
import './SignIn.css'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = this.state
        try{
           await auth.signInWithEmailAndPassword(email, password)
           this.setState({email:'', password: ''})
        }
        catch(error){
            console.log(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className='signInComponent'>
                <h1> I already have an account </h1>
                <span> Sign in with your account</span>
                <form onSubmit={this.handleSubmit}>
            <div className='frm-group'>
                <input 
                onChange = {this.handleChange}
                type='email'
                name='email' 
                placeholder="Email"
                id ='em'
                value={this.state.email} required />
              
            </div>
            <div className='frm-group mt-6'>
                <input 
                onChange = {this.handleChange}
                type='password' 
                name='password' 
                id= 'pd'
                placeholder="Password"
                value={this.state.password} required />
              
                <div className='buttons'>
                    <input type='submit' value='Submit' className='submit' />
                    <button className='google-btn' onClick= {signInWithGoogle} > Sign In With Google</button>
                </div>
            </div>
                </form>
            </div>
        )
    }
}
export default SignIn;