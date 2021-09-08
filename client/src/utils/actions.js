//definning how 3 parts of our state will be maintained and updated

//update products used by productList component 
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
//take the list of categories retrieved from the server by Apollo and store it in this global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
//connecting piece of data for actions above, select a category from the state and display products for that category
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";