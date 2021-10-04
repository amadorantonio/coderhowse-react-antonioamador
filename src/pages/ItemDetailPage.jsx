import React, {useState, useEffect} from "react";
import { useParams } from 'react-router'
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Data from '../assets/data/data.json'
import { Spinner } from 'react-bootstrap'

let ItemDetailPage = () => {
    const {productId} = useParams()
    const [item, setItem] = useState({})
    const [loader, setLodaer] = useState(true)


    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const mockProducts = Data.map((data) =>{
                    return(data)
                })
                resolve(mockProducts)
            }, 2000);
        })

        getItems.then((res)=>{
            setItem(res.find(element => element.id === parseInt(productId)))
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
                    <ItemDetailContainer item={item}></ItemDetailContainer>
                )
            }
        </>
    )
}

export default ItemDetailPage