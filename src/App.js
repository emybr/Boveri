import Navbar from './components/Navbar';
import ItemListContainer from './components/Productos/ItemListContainer';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import {  useEffect, useState } from 'react';
import {db} from './db/firebase-connfig';
import { collection, getDocs } from "firebase/firestore";
import ItemDetail from './components/Productos/ItemDetail';
import {  DataProvider } from './components/Productos/Contex/DataContex';
import CartContent from './cart/CartContent';



function App() {

const [items, setItems] = useState({productos: [], camisas: []});
const productosCollection = collection(db , "Productos"); 
const camisasCollection = collection(db , "Camisas");

useEffect(() => {
  const getItems = async () => {
    const productosData = await getDocs(productosCollection);
    const camisasData = await getDocs(camisasCollection);
    setItems({
      productos: productosData.docs.map(doc => ({...doc.data(), id: doc.id,})),
      camisas: camisasData.docs.map(doc => ({...doc.data(), id: doc.id,}))
    });
  };

  getItems();
}, []);

  return (
    <DataProvider>
          <div>
            <header>
              <Navbar />
            </header>
            <main>
                <Routes>
                  <Route path="/" element={""} />
                  <Route path="/productos" element={<ItemListContainer   data={items.productos} />} />
                  <Route path="/productos/:id" element={<ItemDetail data={items.productos} />} />
                  <Route path="/camisas" element={<ItemListContainer data={items.camisas}/>} />
                  <Route path="/camisas/:id" element={<ItemDetail data={items.camisas} />} />
                  <Route path="/cart" element={<CartContent/>} />
                </Routes>
            </main>
          </div>
    </DataProvider>            
  );
}

export default App;



