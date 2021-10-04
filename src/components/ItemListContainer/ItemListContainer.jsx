import React from "react";
import ItemList from '../ItemList/ItemList'

let ItemListContainer = ({items}) => {
    
    return(
        <>
            <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer