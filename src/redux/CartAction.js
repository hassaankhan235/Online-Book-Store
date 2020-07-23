export const ToggleDropDownAction = () => {
    return(
        {
            type: 'Toggle_DropDown'
        }
    )
}
export const addItem = (item) => {
    return(
        {
            type: 'Add_Item',
            payload: item
        }
    )
}
