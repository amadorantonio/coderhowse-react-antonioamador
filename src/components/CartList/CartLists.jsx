import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartItem from "../CartItem/CartItem"

//Contexto
import CartContext from '../../context/CartContext'


let CartList = ({products}) => {
    const {handleClose} = useContext(CartContext)
    if(products.length > 0){
        return(
            <>
            {
                products.map((product, index) => {
                    return(
                        <CartItem product={product} index={index} key={product.item.id}/>
                    )
                })
            }
            </>
        )
    }
    else {
        return(
            <h1>No hay productos en el carrito <NavLink to='/'><Button onClick={handleClose}>Regresar al inicio</Button></NavLink></h1>
        )
    }

    
}

export default CartList