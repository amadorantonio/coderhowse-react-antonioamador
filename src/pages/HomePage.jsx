import React, {useState, useEffect} from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Data from '../assets/data/data.json'
import { Spinner } from 'react-bootstrap'


const HomePage = () => {

    const [items, setItems] = useState([])
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
            setItems(res)
        }).finally(() => setLodaer(false))
    }, [])

    return(
        <div>
            {
                loader ? (
                    <div className="d-flex" style={{height:500, justifyContent: 'center', alignItems:'center'}}>
                        <Spinner animation="grow" />
                    </div>
                ) : (
                    <ItemListContainer items={items}></ItemListContainer>
                )
            }
        </div>
    )
}

export default HomePage