import React from 'react'
import SignIn from '../components/signin/SignIn'
import SignUp from '../components/signin/SignUp'
import './SignInSignUp.css'

const SignInSignUp = () => {
    return(
        <div className='sign_comp'>
            <SignIn />
            <SignUp />
        </div>
    ) 
}
export default SignInSignUp;