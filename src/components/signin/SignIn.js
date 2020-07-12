import React, { Component } from 'react'
import './SignIn.css'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = event => {
        event.prevenDefault()
        this.setState({email:'', password: ''})
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
                id ='em'
                value={this.state.email} required />
                <label htmlFor='em' className='floating'>Email</label>
            </div>
            <div className='frm-group'>
                <input 
                onChange = {this.handleChange}
                type='password' 
                name='password' 
                id= 'pd'
                value={this.state.password} required />
                <label htmlFor='pd' className='floating'>Password</label>
                
                <input type='submit' value='Submit' className='submit' />
            </div>
                </form>
            </div>
        )
    }
}
export default SignIn;