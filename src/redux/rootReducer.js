import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import ToggleDropDownReducer from './cart/ToggleDropDownReducer'

export default combineReducers({
    user: userReducer,
    cart: ToggleDropDownReducer
})