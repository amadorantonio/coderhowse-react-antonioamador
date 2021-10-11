import React ,{useState, useContext} from "react";
import { Col, Container, Row, Button, Modal, Table } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import {NavLink} from 'react-router-dom'

//Context
import CartContext from '../../context/CartContext'


let ItemDetail = ({item}) => {

    let [itemCount, setItemCount] = useState(1)
    let [show, setShow] = useState(false);
    let [acquired, setAcquired] = useState(false);
    const {products, addItem, removeItem, clear} = useContext(CartContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onAdd = () => {
        itemCount < item.stock && setItemCount(itemCount + 1)
    }

    const onLess = () => {
        itemCount !== 0 && setItemCount(itemCount - 1)
    }

    const addToCart = () => {
        addItem({'item': item, 'itemCount': itemCount})
        handleShow()
        setAcquired(true)
    }

    const removeCart = (id) => {
        removeItem({'id': id})
    }

    return(
        <>
            <Container>
                <Row>
                    <Col><h1>{item.title}</h1></Col>
                </Row>
                <Row>
                    <Col xs="6"><img src={item.pictureUrl} className="img-fluid" alt={item.title}></img></Col>
                    <Col xs="4">
                        <p className='textDescription'>{item.description}</p>
                        <h3>${item.price} mxn</h3>
                        <p>{item.stock} unidades disponibles</p>
                        {/* <ItemCount stock={item.stock} ></ItemCount> */}
                        {
                            !acquired && <ItemCount onAdd={onAdd} onLess={onLess} itemCount={itemCount}></ItemCount>
                        }
                        {
                            !acquired ? (
                                <Button 
                                    variant="secondary" 
                                    disabled={item.stock === 0} 
                                    onClick={addToCart}
                                    style={acquired ? {display : 'none'} : {}}
                                    >
                                    Agrear a Carrito
                                </Button>
                            ) : (
                                <NavLink to={"/cart"} className="nav-link">
                                    <Button 
                                        variant="success" 
                                        style={!acquired ? {display : 'none'} : {}}
                                        >
                                        Terminar mi compra
                                    </Button>
                                </NavLink>
                            )
                        }
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Productos en carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map(item =>{
                        return(
                            <tr key={item.item.id}>
                                <td>{item.item.title}</td>
                                <td>{item.itemCount}</td>
                                <td><Button variant="light" onClick={() => removeCart(item.item.id)}><i className="bi bi-x-circle" style={{color: 'red'}} key={item.item.id}></i></Button></td>
                            </tr>
                        )
                    })}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={clear}>
                        Limpiar carrito
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemDetail