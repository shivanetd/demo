import React, { createContext, useReducer } from 'react'

export const ProductContext = createContext();




const initState = [
    {title: 'Apple', id: 1},
    {title: 'banana', id: 2},
    {title: 'Cheese', id: 3},
    {title: 'Soda', id: 4}
  ];
  
  
  function reducer(state, action) {
    switch (action.type) {
      case 'add_product':
        return [...state, {title: action.payload, id: 5}];
      case 'remove_product':
        const newState = state.filter( val => val != action.index);
        return newState;
      default:
        throw new Error();
    }
  }


function ProductContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <ProductContext.Provider value={{products: state, productDispatch: dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
