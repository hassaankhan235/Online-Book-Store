import {addItemToCart} from './car.utils'
const INITIAL_STATE = {
    hidden : true,
    cartItem : []
};

const CartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case 'Toggle_DropDown':
           return{
                ...state,
                hidden : !state.hidden
            }
        case 'Add_Item':
            return{
                ...state,
                cartItem : addItemToCart(state.cartItem,action.payload)
            }
        case 'ClearItemFromCart':
            return{
                ...state,
                cartItem: state.cartItem.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
    default: 
    return state
    }
}
export default CartReducer;