//firebase
import db from '../firebase'
import { collection, getDocs, query, where, doc, getDoc, addDoc  } from 'firebase/firestore'

export async function getItems() {
    const itemsColection = collection(db, 'products')
    const itemsSnapshot = await getDocs(itemsColection)
    const itemList = itemsSnapshot.docs.map(doc => {
        return {idFirebase: doc.id, ...doc.data()}
        
    })
    // productsInCart.forEach(element => {
    //     console.log(element)
    // });
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
    const itemList = querySnapshot.docs.map(doc => {
        return {idFirebase: doc.id, ...doc.data()}
    })
    return itemList
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // });
}

export async function getItemById(id) {
    // const q = query(collection(db, "products"), where("id", "==", parseInt(id)));

    // const querySnapshot = await getDocs(q);
    // const itemList = querySnapshot.docs.map(doc => doc.data())
    // return itemList[0]

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {idFirebase: docSnap.id, ...docSnap.data()}
    } else {
        return {error: "error"}
    }
}

export async function pushOrderFirebase(newOrder) {
    const orderFirebase = collection(db, 'orders')
    const order = await addDoc(orderFirebase, newOrder)
    return(order.id)
}

export async function getOrderById(id) {
    const docRef = doc(db, "orders", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {idFirebase: docSnap.id, ...docSnap.data()}
    } else {
        return {error: "error"}
    }
}