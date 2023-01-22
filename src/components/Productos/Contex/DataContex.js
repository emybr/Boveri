
import React, { useState, useEffect } from 'react';
import { db } from '../../../db/firebase-connfig'

import { collection, getDocs } from "firebase/firestore";


const dataContex = React.createContext();


// const DataProvider = ({ children }) => {

//     const [items, setItems] = useState({ productos: [], camisas: [] });
//     const productosCollection = collection(db, "Productos");
//     const camisasCollection = collection(db, "Camisas");
//     const [cart, setCart] = useState([])
  
//     // funciona 
//     // agrego funcion para eliminar del carrito y cantidad de productos
//     const removeItem = (id) => {
//         setCart(cart.filter((item) => item[0].id !== id))
//     }

//     // agrego funcion para agregar al carrito
//     const addItem = (item, quantity) => {
//         let itemInCart = cart.find((i) => i[0].id === item.id)
//         if (itemInCart) {
//             itemInCart[1] += quantity
//             setCart([...cart])
//         } else { setCart([...cart, [item, quantity]]) }
//     }


//     useEffect(() => {
//         const getItems = async () => {
//             const productosData = await getDocs(productosCollection);
//             const camisasData = await getDocs(camisasCollection);
//             setItems({
//                 productos: productosData.docs.map(doc => ({ ...doc.data(), id: doc.id, })),
//                 camisas: camisasData.docs.map(doc => ({ ...doc.data(), id: doc.id, }))
//             });
//         };
        
//         getItems();
//     }, []);




const DataProvider = ({ children }) => {

    const [items, setItems] = useState({ productos: [], camisas: [] });
    const productosCollection = collection(db, "Productos");
    const camisasCollection = collection(db, "Camisas");
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    // agrego funcion para eliminar del carrito y cantidad de productos
    const removeItem = (id) => {
        setCart(cart.filter((item) => item[0].id !== id));
        setCantidad(cantidad - 1);
        setTotal(total - (cart.find(item => item[0].id === id)[0].price));
    }

    const Buyproduct = (item) => {
        setCart([...cart, item[0]]);
    }

    useEffect(() => {
        const getItems = async () => {
            const productosData = await getDocs(productosCollection);
            const camisasData = await getDocs(camisasCollection);
            setItems({
                productos: productosData.docs.map(doc => ({ ...doc.data(), id: doc.id, })),
                camisas: camisasData.docs.map(doc => ({ ...doc.data(), id: doc.id, }))
            });
        };
        
        getItems();
    }, [] );


    return (
        <dataContex.Provider value={{ items, cart, setCart,removeItem, }}>
            {children}
        </dataContex.Provider>
    )
}

export { dataContex, DataProvider };



