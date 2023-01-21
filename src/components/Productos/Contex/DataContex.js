
import React, { useState, useEffect } from 'react';
import { db } from '../../../db/firebase-connfig'

import { collection, getDocs } from "firebase/firestore";

const dataContex = React.createContext();


const DataProvider = ({ children }) => {

    const [items, setItems] = useState({ productos: [], camisas: [] });
    const productosCollection = collection(db, "Productos");
    const camisasCollection = collection(db, "Camisas");
    const [cart, setCart] = useState([])


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
    }, []);

    

    return (
        <dataContex.Provider value={{ items, cart, setCart }}>
            {children}
        </dataContex.Provider>
    )
}

export { dataContex, DataProvider };



