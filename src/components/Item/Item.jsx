import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import {NavLink} from 'react-router-dom'


let Item = (props) => {
    let bgClass = ""
    switch (props.category) {
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
                    <span className={bgClass}>{props.category}</span>
                </Col>
            </Row>
            <Card.Img variant="top" src={props.pictureUrl} alt="imagen de producto" />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>${props.price} mxn</Card.Text>
            <Card.Text>En Sock: {props.stock}</Card.Text>
            <Card.Text>Cantidad</Card.Text>
            <ItemCount stock={props.stock}></ItemCount>
            <Row className="p-3">
                <Col>
                    <Button variant="secondary" disabled={props.stock === 0}>Agrear a Carrito</Button>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <NavLink to={"/detalle/" + props.id} className="nav-link"><Button variant="secondary">Ver Detalle</Button></NavLink>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item