import React, { useContext } from "react";
//Context
import CartContext from '../../context/CartContext'

let CartWidget = () => {
    const {products} = useContext(CartContext)

    return (
        <>
        <i className="bi bi-cart"></i>
        {products.length}
        </>
    )
}

export default CartWidget