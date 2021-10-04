import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

let ItemDetailContainer = ({item}) => {
    return(
    <>
        {
            <ItemDetail item={item}></ItemDetail>
        }
    </>
    )
}

export default ItemDetailContainer