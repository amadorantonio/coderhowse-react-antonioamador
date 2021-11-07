import { getOrderById } from '../functions/FirebaseFunctions'
import { Button, Col, Row, Form, Spinner } from "react-bootstrap";
import React, { useState } from "react";
import Cart from '../components/Cart/Cart'



let OrdersPage = () => {
    const [orderNumber, setOrderNumber] = useState('')
    const [loader, setLodaer] = useState(false)
    const [order, setOrder] = useState()
    const [products, setProducts] = useState([])


    let searchOrder = () => {
        setLodaer(true)
        getOrderById(orderNumber).then((res) => {
            setOrder(res)
            if(res.error !== 'error'){
                setProducts(Object.values(res.items))
            }
            console.log('res --->>>',res)
            console.log('products --->>>',products)
        }).finally(() => setLodaer(false))
    }

    return(
        <>
            <Row className="m-5 align-items-center">
                <Col xs={10}>
                    <Form.Label>Número de orden</Form.Label>
                    <Form.Control type="text" value={orderNumber} placeholder="Favor de introducir el número de orden aquí" onChange={e => setOrderNumber(e.target.value)} required/>
                </Col>
                <Col xs={2}>
                    <Button disabled={orderNumber.length === 0} size="lg" onClick={searchOrder}>Buscar</Button>
                </Col>
            </Row>
            <Row>
            {
                 loader ? (
                    <div className="d-flex" style={{height:500, justifyContent: 'center', alignItems:'center'}}>
                        <Spinner animation="grow" />
                    </div>
                ) : (
                    order ? (
                        order.error ? (
                            <div>Orden no existente en firebase</div>
                        ) : (
                            <>
                                <Row>
                                    <Col>
                                        Productos en la orden: {products.length} | Costo total: ${order.total} | Fecha de compra: {order.date} | Estatus: {order.status}
                                    </Col>
                                </Row>
                                <Cart products={products}></Cart>
                            </>
                        )
                        
                    ) : (
                        <div></div>
                    )
                )
            }
            </Row>
        </>
    )
}

export default OrdersPage