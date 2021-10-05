import React, {useContext} from "react";
import Context from '../../context/StaticContext'

let CartWidget = () => {
    const contextData = useContext(Context)
    console.log('CartWidget Context--->', contextData)
    return (
        <>
        <i className="bi bi-cart"></i>
        11
        </>
    )
}

export default CartWidget