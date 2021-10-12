import { useContext } from "react";
import { Card, Row, Col, Image } from "react-bootstrap"

//Context
import CartContext from '../../context/CartContext'

let CartItem = ({product}) => {
    const {removeItem} = useContext(CartContext)
    return(
        <>
        <Row className='p-2'>
            <Col>
                <Card>
                    <Card.Body>
                        <Row className='align-items-center'>
                            <Col xs={2}>
                                <Image fluid src={product.item.pictureUrl}></Image>
                            </Col>
                            <Col xs={3}>
                                <h5>{product.item.title}</h5>
                                <p>({product.item.category})</p>
                            </Col>
                            <Col xs={2}>
                                Precio unitario ${product.item.price} mxn
                            </Col>
                            <Col xs={2}>
                                {product.itemCount} productos
                            </Col>
                            <Col xs={2}>
                                Total ${product.itemCount * product.item.price} mxn
                            </Col>
                            <Col xs={1}>
                                <div className='btn' onClick={() => removeItem(product.item.id)}>
                                    <i className="bi bi-trash" style={{color: 'red'}}></i>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default CartItem