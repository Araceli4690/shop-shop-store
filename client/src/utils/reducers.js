//react hook that will know how to take in our state and uodate it through our reducer function
import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        //
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        //
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        default:
            return state;
    }
};

//useProductReducer used to initialize our global state object 
export function useProductReducer(initialState) {
    // provide us with the functionality for updating that state by automatically running it through our custom reducer() function
    return useReducer(reducer, initialState);
}