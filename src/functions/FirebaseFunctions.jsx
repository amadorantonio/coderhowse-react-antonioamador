//firebase
import db from '../firebase'
import { collection, getDocs, query, where  } from 'firebase/firestore'

export async function getItems() {
    const itemsColection = collection(db, 'products')
    const itemsSnapshot = await getDocs(itemsColection)
    const itemList = itemsSnapshot.docs.map(doc => doc.data())
    //console.log('items: ', itemList)
    return itemList
}

export async function getCategories() {
    const categoriesColection = collection(db, 'categories')
    const categoriesSnapshot = await getDocs(categoriesColection)
    const categoriesList = categoriesSnapshot.docs.map(doc => doc.data())
    return categoriesList
}

export async function getItemsByCategory(category) {
    const q = query(collection(db, "products"), where("category", "==", category));

    const querySnapshot = await getDocs(q);
    const itemList = querySnapshot.docs.map(doc => doc.data())
    return itemList
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // });
}

export async function getItemById(id) {
    const q = query(collection(db, "products"), where("id", "==", parseInt(id)));

    const querySnapshot = await getDocs(q);
    const itemList = querySnapshot.docs.map(doc => doc.data())
    return itemList[0]
}