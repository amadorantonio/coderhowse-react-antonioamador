import React, {useState, useEffect, useContext} from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import data from '../assets/data/data.json'
import { Spinner } from 'react-bootstrap'
import Context from '../context/StaticContext'


const HomePage = () => {

    const contextData = useContext(Context)
    console.log('HomePage Context--->', contextData)

    const [items, setItems] = useState([])
    const [loader, setLodaer] = useState(true)
    

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const mockProducts = data.map((data) =>{
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