import React, {useState, useContext} from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import {NavLink} from 'react-router-dom'

//Context
import CartContext from '../../context/CartContext'


let Item = ({item}) => {

    let [itemCount, setItemCount] = useState(1)
    let [acquired, setAcquired] = useState(false);
    const {addItem, handleShow} = useContext(CartContext)

    const onAdd = () => {
        itemCount < item.stock && setItemCount(itemCount + 1)
    }

    const onLess = () => {
        itemCount !== 0 && setItemCount(itemCount - 1)
    }

    const addToCart = () => {
        addItem({'item': item, 'itemCount': itemCount})
        setAcquired(true)
    }

    let bgClass = ""
    switch (item.category) {
        case "Adultos":
            bgClass = "badge bg-primary"
            break;
        case "Urbanas":
            bgClass = "badge bg-info text-dark"
            break;
        case "Infantiles":
            bgClass = "badge bg-light text-dark"
            break;
        default:
            break;
    }

    return(
        <>
        <Card>            
            <Row className="text-end">
                <Col>
                    <span className={bgClass}>{item.category}</span>
                </Col>
            </Row>
            <Card.Img variant="top" src={item.pictureUrl} alt="imagen de producto" />
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>${item.price} mxn</Card.Text>
            <Card.Text>En Sock: {item.stock}</Card.Text>
            {
                !acquired ? (
                    <div>
                        <Card.Text>Cantidad</Card.Text>
                        <ItemCount onAdd={onAdd} onLess={onLess} itemCount={itemCount}></ItemCount>
                    </div>
                ):(
                    <div></div>
                )
            }
            
            <Row className="p-3">
                {
                    !acquired ? (
                        <Col>
                            <Button variant="secondary" disabled={item.stock === 0} onClick={addToCart}>Agrear a Carrito</Button>
                        </Col>
                    ):(
                        <Button onClick={handleShow}>
                            Terminar mi compra
                        </Button>
                    )
                }
                
            </Row>
            <Row>
                <Col>
                    <NavLink to={"/detalle/" + item.idFirebase} className="nav-link"><Button variant="secondary">Ver Detalle</Button></NavLink>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item