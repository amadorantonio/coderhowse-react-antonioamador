import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const[products, setProducts] = useState([])

    const addItem = (e) => {
        if(isInCart(e.item.id)){
            console.log('Producto existente en el carrito, no se agregó a la lista')
        }
        else {
            // Me no me actualizaba el número de elementos en el cart widget
            // products.push(e)
            // setProducts(products)

            //Todo bien
            const cartElements = [...products]
            cartElements.push(e)
            setProducts([...cartElements])
        }
    }

    const removeItem = (e) => {
        const cartElements = products.filter(element => element.item.id !== e.id) || []
        setProducts([...cartElements])
    }

    const clear = () => {
        setProducts([])
        console.log('Carrito vacío')
    }

    function isInCart(id) {
        return products.filter(x => x.item.id === id).length > 0 ? true : false
    }

    const data = {
        products,
        addItem,
        removeItem,
        clear
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext