const INITIAL_STATE = {
    hidden : true
};

const ToggleDropDownReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case 'Toggle_DropDown':
           return{
                ...state,
                hidden : !state.hidden
            }
        default : 
        return state;
    }
}
export default ToggleDropDownReducer;