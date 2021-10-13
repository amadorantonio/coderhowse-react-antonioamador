import React from "react";
import Item from '../Item/Item'
import { Row } from 'react-bootstrap';

let ItemList = ({items}) => {
    return(
        <div>
            <Row xs={1} md={3} sm={2} className="g-4">
            {
                items.map((item) => {
                    return(
                        <div className="p-3" key={item.id}>
                            <Item key={item.id} item={item}></Item>
                        </div>
                    )
                })
            }
            </Row>
            
            
        </div>
    )
}

export default ItemList