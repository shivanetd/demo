import React, { Component, useContext, useState } from 'react';
import {ThemeContex} from '../contexts/ThemeContex';
import {ProductContext} from '../contexts/ProductContext';

const BooksList = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContex);
    const {products, productDispatch} = useContext(ProductContext);
    const theme = isLightTheme ? light : dark;

    const[newProductTitle, setNewProductTitle] = useState("");

    const handleAdd = () => {
        //actionAdd(newProductTitle)
        productDispatch({type: "add_product", payload: newProductTitle});
    }


    const actionAdd = (payload) =>{
        
    }

    return (
        <div className="product-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {products.map((product) => {
                    return(
                    <li style={{background: theme.ui}}> {product.title}</li>
                    )
                })}
            </ul>
            <input type="text" value={newProductTitle} onChange={(e) => {setNewProductTitle(e.currentTarget.value)}}></input>
            <button onClick={handleAdd}>Add Product</button>
        </div>
    )
}

export default BooksList;