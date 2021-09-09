import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

//creates new context object
const StoreContext = createContext();
const { Provider } = StoreContext;

//we instantiate our initial global state with the useProductReducer() function we created earlier
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    //confirm that it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext)
};

export { StoreProvider, useStoreContext };