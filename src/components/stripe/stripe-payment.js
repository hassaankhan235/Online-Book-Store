import React from 'react' 
import StripeCheckout from 'react-stripe-checkout'


const ontoken = token => {
    console.log(token)
    alert("Your Payment was Successful.")
}

const StripePayment = ({price}) => {
    const stripePrice = price * 100
    const publishableKey = 'pk_test_51H9B3BC247iJht6ULPqx2CLc9ok8PGtg0agxAK21BbCHYJs3bEvExnsvwaGvxoRAJ30kfzf2r452ojXl8x4OlBM500tLCw9fg1'

    return(
        <StripeCheckout 
        label = 'PAY NOW'
        name = 'Online Bookstore'
        billingAddress
        shippingAddress
        description = {`Your total amount is ${price}` }
        amount = {stripePrice}
        panelLabel = "Pay Amount"
        token = {ontoken}
        stripeKey = {publishableKey}
        />
    )
}
export default StripePayment