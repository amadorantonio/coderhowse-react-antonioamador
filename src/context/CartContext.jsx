import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const[products, setProducts] = useState([])
    const[cartShow, setcartShow] = useState(false)
    const[numberOfProducts, setcartNumberOfProducts] = useState(0)
    const[totalPrice, setTotalPrice] = useState(0)

    const addItem = (e) => {
        if(isInCart(e.item.id)){
            console.log('Producto existente en el carrito, no se agregó a la lista')
        }
        else {
            const cartElements = [...products]
            cartElements.push(e)
            setProducts([...cartElements])
        }
    }

    const removeItem = (e) => {
        console.log(e)
        const cartElements = products.filter(element => element.item.id !== e) || []
        setProducts([...cartElements])
    }

    const clear = () => {
        setProducts([])
        console.log('Carrito vacío')
    }

    function isInCart(id) {
        return products.filter(x => x.item.id === id).length > 0 ? true : false
    }

    const handleShow = () => setcartShow(true);
    const handleClose = () => setcartShow(false);

    useEffect(() =>{
        let count = 0
        let totalPrice = 0
        products.forEach(product => {
            totalPrice += (product.itemCount * product.item.price)
            count += product.itemCount
        });
        setcartNumberOfProducts(count)
        setTotalPrice(totalPrice)
    }, [products])

    const data = {
        products,
        cartShow,
        addItem,
        removeItem,
        clear,
        handleShow,
        handleClose,
        numberOfProducts,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext