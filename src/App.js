import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import SelectedCard from './components/SelectedCard';
import { data } from './components/data';





function App() {
  
  return (
        
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={""} />
                <Route path="/productos" element={<ItemListContainer greeting="" />} />
                <Route path="/comprar/comprar/:itemid" element={<SelectedCard productos={data}/>} />
              </Routes>
            </main>
          </div>
      
      
  );
}

export default App;



