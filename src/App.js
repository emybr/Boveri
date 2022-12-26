import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import SelectedCard from './components/SelectedCard';
import  data  from './components/data.json';
import './App.css';
import { useEffect, useState } from 'react';






function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(data);}, [])

  return (
        
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <main>
              
              <Routes>
                <Route path="/" element={""} />
                <Route path="/productos" element={<ItemListContainer   data={productos}/>} />
                <Route path="/productos/:id" element={<SelectedCard data={productos}/>} />
                <Route path="*" element={<Navigate to="/"/>} />
              </Routes>
            </main>
          </div>
      
      
  );
}

export default App;



