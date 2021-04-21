
// The initialState is how the data layer looks, when the app starts up
export const initialState = {
    user: null,
};

// The actionTypes is where you can push information into the data layer
export const actionTypes = {
    SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case actionTypes.SET_USER: 
            return {
                ...state, //keep the state of the data layer
                user: action.user, //but change the user to be whatever we dispatch
            };

            default:
                return state;
    }
};

export default reducer;