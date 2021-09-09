//definning how 3 parts of our state will be maintained and updated

//update products used by productList component 
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
//take the list of categories retrieved from the server by Apollo and store it in this global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
//connecting piece of data for actions above, select a category from the state and display products for that category
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

///respresents all actions one might want to preform with a shopping cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

