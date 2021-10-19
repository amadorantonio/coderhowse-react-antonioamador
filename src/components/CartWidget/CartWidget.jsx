import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

//Components
import Cart from '../Cart/Cart'

//Context
import CartContext from '../../context/CartContext'

//Funciones
import {pushOrderFirebase} from '../../functions/FirebaseFunctions'

let CartWidget = () => {
    const {products, cartShow, handleShow, handleClose, numberOfProducts, totalPrice, clear} = useContext(CartContext)

    const newOrder = {
        total: totalPrice,
        date: moment().format('DD/mm/yyyy, hh:mm:ss'),
        buyer: {
            name: 'Antonio',
            phone: '4737564434',
            email: 'amador.barajas.antonio@gmail.com'
        },
        items: {
            ...products
        },
    }

    const finalizarOrden = () => {
        pushOrderFirebase(newOrder).then((res) => {
            clear()
            toast.success('Compra realizada con éxito, el id de su orden es: ' + res);
        })
    } 

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
            {
                products.length > 0 && (
                    <Modal.Footer>
                        <Button variant="danger" onClick={clear}>
                        <i className="bi bi-trash-fill"></i> Vaciar Carrito
                        </Button> 
                        <Button variant='success' onClick={finalizarOrden}>
                            <i className="bi bi-check-circle"></i> Finalizar Orden
                        </Button>
                    </Modal.Footer>
                    )     
            }
        </Modal>
        <ToastContainer />
        </>
    )
}

export default CartWidget