import React, {useState, useEffect} from "react";
import { useParams } from 'react-router'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { Spinner } from 'react-bootstrap'
import { getItemById } from '../functions/FirebaseFunctions'
import ItemError from "../components/ItemError/ItemError";


let ItemDetailPage = () => {
    const {productId} = useParams()
    const [item, setItem] = useState({})
    const [loader, setLodaer] = useState(true)
    const [itemNotFound, setItemNotFound] = useState(false)


    useEffect(() => {
        // const getItems = new Promise((resolve) => {
        //     setTimeout(() => {
        //         const mockProducts = Data.map((data) =>{
        //             return(data)
        //         })
        //         resolve(mockProducts)
        //     }, 500);
        // })

        // getItems.then((res)=>{
        //     setItem(res.find(element => element.id === parseInt(productId)))
        // }).finally(() => setLodaer(false))
        getItemById(productId).then((res) => {
            if(res.error){
                setItemNotFound(true)
            }
            setItem(res)
        }).finally(() => setLodaer(false))
    }, [productId])


    return(
        <>
            {
                loader ? (
                    <div className="d-flex" style={{height:500, justifyContent: 'center', alignItems:'center'}}>
                        <Spinner animation="grow" />
                    </div>
                ) : (
                    itemNotFound ? (
                        <ItemError productId={productId}></ItemError>
                    ) : (
                        <ItemDetailContainer item={item}></ItemDetailContainer>
                    )
                    
                )
            }
        </>
    )
}

export default ItemDetailPage