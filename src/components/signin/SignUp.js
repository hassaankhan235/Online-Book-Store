import React, { Component, Fragment } from 'react'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './SignUp.css'

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            displayName : '',
            email : '',
            password : ''
        }
    }


    handlesubmit = async event => {
        event.preventDefault()
        const {displayName, email, password} = this.state;

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            const {uid} = user
            await createUserProfileDocument(displayName, email, uid)
            this.setState({
                displayName : '',
                email : '',
                password : ''
            })
        }
        catch(error){
            console.log('error in creating user', error)
        }
        
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value}) 
    }

    render(){
        const {displayName, email, password} = this.state
        return(
    <div className='resp_flex flex_col mobile_screen_margin' >
            <h1>I do not have an account </h1>
            <span>Please sign up.</span>
        <div>
            <input className="mt-10 border-bottom width-60" id='Name' 
            onChange = {this.handleChange}
            name = 'displayName'
            type="text"
            value = {displayName}
            placeholder='Name'  />
           
        </div>
        <div>
            <input className='border-bottom width-60 mt-5'
            onChange = {this.handleChange}
            name = 'email'
            type='email'
            value = {email}
            placeholder='Email' id='email' />
        </div>
        <div>
            <input className='border-bottom width-60 mt-5' 
            onChange = {this.handleChange}
            name = 'password'
            type='password'
            value = {password}
            placeholder='Password' id='password' />
        </div> 
            <button className='submit mt-3' onClick={this.handlesubmit}>submit</button>
    </div>
        )
    }
} 
export default SignUp