import React from "react";
import {Button, Col, Container, Row} from 'react-bootstrap';

let ItemCount = (props) => {
    // let [itemCount, setItemCount] = useState(1)
    // const agregarStock = () => {
    //     if(props.stock > itemCount){
    //         setItemCount(itemCount + 1)
    //     }
    // }
    // const quitarStock = () => {
    //     if(itemCount > 1){
    //         setItemCount(itemCount - 1)
    //     }
    // }
    // if(props.stock === 0){
    //     itemCount = 0
    // }
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Button className="mr-4" onClick={props.onLess}>-</Button>
                    </Col>
                    <Col>{props.itemCount}</Col>
                    <Col><Button onClick={props.onAdd}>+</Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemCount