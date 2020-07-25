import { createSelector } from 'reselect'

const selectcart = state => state.cart;

export const selectcartItem = createSelector(
    [selectcart],
    cart => cart.cartItem
);

export const selectCartHidden = createSelector(
    [selectcart],
    cart => cart.hidden
)

export const selectItemCount = createSelector(
    [selectcartItem],
    (cartItem) => cartItem.reduce((acc,item)=> acc + item.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectcartItem],
    cartItem => cartItem.reduce((acc, item) => acc + item.quantity * item.price, 0)
) 