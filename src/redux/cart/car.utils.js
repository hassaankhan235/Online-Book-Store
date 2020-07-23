export const addItemToCart = (cartItems,newItemToAdd) => {
    const existingItem = cartItems.find(
        cartItem =>  cartItem.id === newItemToAdd.id
    )

    if(existingItem){
        return(
            cartItems.map((cartItem => {
                if(cartItem.id === newItemToAdd.id)   
                    return(
                        {...cartItem, quantity: cartItem.quantity + 1} 
                    )
                else
                return cartItem
                })   
        )
        )}

    return [...cartItems, {...newItemToAdd, quantity : 1}]
}