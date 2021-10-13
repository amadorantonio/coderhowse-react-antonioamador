import { createContext, useState, useEffect } from "react";

//Toast Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext()

const CartProvider = ({children}) => {

    const[products, setProducts] = useState([])
    const[cartShow, setcartShow] = useState(false)
    const[numberOfProducts, setcartNumberOfProducts] = useState(0)
    const[totalPrice, setTotalPrice] = useState(0)

    const addItem = (e) => {
        if(isInCart(e.item.id)){
            notifyError(`${e.item.title} ya se encuentra en la lista de compras`)
        }
        else {
            const cartElements = [...products]
            cartElements.push(e)
            setProducts([...cartElements])
            notifySuccess(`${e.itemCount} productos agretados al carrito`)
        }
    }

    const removeItem = (e) => {
        console.log(e)
        const cartElements = products.filter(element => element.item.id !== e) || []
        setProducts([...cartElements])
        notifySuccess(`Producto eliminado de la lista de compras`)
    }

    const clear = () => {
        setProducts([])
        notifySuccess(`Tu carrito esta vacío`)
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

    const notifySuccess = (text) => toast.success(text);
    const notifyError = (text) => toast.error(text);

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
            <ToastContainer />
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext