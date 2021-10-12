import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import NavBar from './components/NavBar/NavBar';

//Pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoriesPage from "./pages/CategoriesPage";
import ItemDetailPage from "./pages/ItemDetailPage";


//Data
import categoriesData from './assets/data/categories.json'

export default function AppRouter(){

    const categories = categoriesData.map((data) =>{
        return(data)
    })

    return(
        <BrowserRouter>
            <NavBar categories={categories}/>
            <h3>
                Tienda de bicicletas de Antonio Amador / React / CODERHOUSE
            </h3>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/categorias/:text" component={CategoriesPage}></Route>
                <Route exact path="/detalle/:productId" component={ItemDetailPage}></Route>
                <Route exact path="*" component={NotFoundPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}