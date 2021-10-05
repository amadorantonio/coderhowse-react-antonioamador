import React ,{useState} from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import {NavLink} from 'react-router-dom'


let ItemDetail = ({item}) => {

    let [itemCount, setItemCount] = useState(1)
    let [show, setShow] = useState(false);
    let [acquired, setAcquired] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onAdd = () => {
        itemCount < item.stock && setItemCount(itemCount + 1)
    }

    const onLess = () => {
        itemCount !== 0 && setItemCount(itemCount - 1)
    }

    const addToCart = () => {
        handleShow()
        setAcquired(true)
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
                        <Button 
                            variant="secondary" 
                            disabled={item.stock === 0} 
                            onClick={addToCart}
                            style={acquired ? {display : 'none'} : {}}
                            >
                            Agrear a Carrito
                        </Button>
                        <NavLink to={"/cart"} className="nav-link">
                            <Button 
                                variant="success" 
                                style={!acquired ? {display : 'none'} : {}}
                                >
                                Terminar mi compra
                            </Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Artículos agregados al carrito exitosamente</Modal.Title>
                </Modal.Header>
                <Modal.Body>Se agregaron {itemCount} artículos.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemDetail