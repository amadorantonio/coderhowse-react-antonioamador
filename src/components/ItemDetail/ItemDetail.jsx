import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

let ItemDetail = ({item}) => {
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
                        <ItemCount stock={item.stock}></ItemCount>
                        <Button variant="secondary" disabled={item.stock === 0}>Agrear a Carrito</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemDetail