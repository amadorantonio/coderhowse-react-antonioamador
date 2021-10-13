import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import ItemList from '../components/ItemList/ItemList'
// import data from '../assets/data/data.json'
import { Spinner } from 'react-bootstrap'

//firebase
import { getItemsByCategory } from '../functions/FirebaseFunctions'

const CategoriesPage = () => {
    const {text} = useParams()
    const [items, setItems] = useState([])
    const [loader, setLodaer] = useState(true)
    
    useEffect(() =>{
        setLodaer(true)
        // const getItems = new Promise((resolve) => {
        //     setTimeout(() => {
        //         const mockProducts = data.map((data) =>{
        //             return(data)
        //         })
        //         resolve(mockProducts)
        //     }, 500);
        // })
        // getItems.then((res)=>{
        //     setItems(res.filter(product => product.category === text))
        // }).finally(() => setLodaer(false))

        getItemsByCategory(text).then((res) => {
            setItems(res)
        }).finally(() => setLodaer(false))
    }, [text])

    return(
        <div>
            <h2>{text}</h2>
            {
                loader ? (
                    <div className="d-flex" style={{height:500, justifyContent: 'center', alignItems:'center'}}>
                        <Spinner animation="grow" />
                    </div>
                ) : (
                    <ItemList items={items}></ItemList>
                )
            }
        </div>
    )
}

export default CategoriesPage