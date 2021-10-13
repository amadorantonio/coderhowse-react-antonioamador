import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

//Components
import Cart from '../Cart/Cart'

//Context
import CartContext from '../../context/CartContext'

let CartWidget = () => {
    const {products, cartShow, handleShow, handleClose, numberOfProducts, totalPrice, clear} = useContext(CartContext)

    return (
        <>
        {
            products.length > 0 && (
                <div onClick={handleShow} className='btn'>
                    <i className="bi bi-cart">{numberOfProducts}</i>
                </div>
            )
        }
        <Modal show={cartShow} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Productos en carrito: {numberOfProducts} | Costo total: ${totalPrice} mxn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Cart products={products}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={clear}>
                <i className="bi bi-trash-fill"></i> Vaciar Carrito
                </Button> 
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default CartWidget