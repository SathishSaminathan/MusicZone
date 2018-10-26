import {
    SIGN_UP,
    SELECTED_TAGS
} from "./actionTypes";

export const signUp = (userFirstName, userLastName, email) => {
    return {
        type: SIGN_UP,
        userFirstName: userFirstName,
        userLastName: userLastName,
        email: email
    }
}

export const selectedTags = (selectedTags) => {
    return {
        type: SELECTED_TAGS,
        selectedTags: selectedTags
    }
}

export const sample = (value)=>{
    return{
        type: SELECTED_TAGS,
        value: value
    }
}