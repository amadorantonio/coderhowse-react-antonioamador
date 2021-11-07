import React, { useContext, useState } from "react";
import { Modal, Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

//Components
import Cart from '../Cart/Cart'

//Context
import CartContext from '../../context/CartContext'

//Funciones
import {pushOrderFirebase} from '../../functions/FirebaseFunctions'

let CartWidget = () => {
    const {products, cartShow, handleShow, handleClose, numberOfProducts, totalPrice, clear, formShow, handleShowForm, handleCloseForm} = useContext(CartContext)

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [idSuccess, setIdSuccess] = useState("");
    const [showModalComplete, setShowModalComplete] = useState(false);
    const [loader, setLoader] = useState(false);

    const openFormClient = () => {
        handleClose()
        handleShowForm()
    }

    const realizarPago = (evt) => {
        evt.preventDefault();
        if(emailValidation()){
            setLoader(true)
            const newOrder = {
                total: totalPrice,
                date: moment().format('DD/mm/yyyy, hh:mm:ss'),
                buyer: {
                    name: name,
                    lastName: lastName,
                    phone: phone,
                    email: email,
                },
                status: 'Generada',
                items: {
                    ...products
                },
            }
    
            pushOrderFirebase(newOrder).then((res) => {
                setLoader(false)
                clear()
                handleCloseForm()
                setShowModalComplete(true)
                setIdSuccess(res)
                clearForm()
                //toast.success('Compra realizada con éxito, el id de su orden es: ' + res);
            })
        }
        else{
            toast.error("Los E-mails no coniciden, por favor verifique")
        }
    }
    
    const clearForm = () => {
        setName('')
        setLastName('')
        setPhone('')
        setEmail('')
        setEmailConfirm('')
    }


    const emailValidation = () => {
        console.log(email, emailConfirm)
        let valid
        email === emailConfirm ? valid = true : valid = false
        return valid
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
                        <Button variant='success' onClick={openFormClient}>
                            <i className="bi bi-check-circle"></i> Finalizar Orden
                        </Button>
                    </Modal.Footer>
                    )     
            }
        </Modal>

        <Modal show={formShow} onHide={handleCloseForm} size="xl" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Productos en carrito: {numberOfProducts} | Costo total: ${totalPrice} mxn</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {
                    loader ? (
                        <div className="d-flex" style={{height:200, justifyContent: 'center', alignItems:'center'}}>
                            <Spinner animation="grow" />
                        </div>
                    ) : (
                        <Form onSubmit={realizarPago} >
                            <Form.Group>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control type="text" value={phone} onChange={e => setPhone(e.target.value)} required />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" value={email} onChange={ e => setEmail(e.target.value)} required />
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Label>Confirme E-mail</Form.Label>
                                        <Form.Control type="email" value={emailConfirm} onChange={e => setEmailConfirm(e.target.value)} required />
                                    </Col>
                                </Row>
                                <Row className="m-5">
                                    <Button variant='success' type='submit'>
                                        <i className="bi bi-check-circle"></i> Realizar pago
                                    </Button>
                                </Row>
                            </Form.Group>
                        </Form>
                    )
                }

                
            </Modal.Body>
        </Modal>

        <Modal show={showModalComplete} onHide={() => {setShowModalComplete(false)}} size="xl" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Compra exitosa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Su compra fue exitosa, puede consultar su pedido ingresando el siguiente código: {idSuccess} en la sección de Pedidos.
            </Modal.Body>
        </Modal>
        <ToastContainer />
        </>
    )
}

export default CartWidget