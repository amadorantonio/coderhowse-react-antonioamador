import React ,{useState, useContext} from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

//Context
import CartContext from '../../context/CartContext'


let ItemDetail = ({item}) => {

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
                        {
                            !acquired && <ItemCount onAdd={onAdd} onLess={onLess} itemCount={itemCount}></ItemCount>
                        }
                        {
                            !acquired ? (
                                <Button 
                                    variant="secondary" 
                                    disabled={item.stock === 0} 
                                    onClick={addToCart}
                                    >
                                    Agrear a Carrito
                                </Button>
                            ) : (
                                <Button onClick={handleShow}>
                                    Terminar mi compra
                                </Button>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemDetail