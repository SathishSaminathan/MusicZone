import {
    SIGN_UP,
    SELECTED_TAGS
} from "../actions/actionTypes";
import {
    stat
} from "fs";

const initialState = {
    userFirstName: "Sathish",
    userLastName: "Saminathan",
    email:"sathishcse1975@gmail.com",
    selectedTags: []
}

const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SIGN_UP:
            debugger
            return {
                ...state,
                userFirstName: action.userFirstName,
                userLastName: action.userLastName,
                email: action.email
            }
        case SELECTED_TAGS:
            {
                debugger
                return {
                    ...state,
                    selectedTags: state.selectedTags.concat({
                        language: action.value
                    })
                }
            }
        default:
            return state;
    }
}

export default reducer;