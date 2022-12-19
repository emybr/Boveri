import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';




function App() {
  
  return (
        
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/productos" element={<ItemListContainer greeting="Bienvenido a Boveri" />} />
              </Routes>
            </main>
          </div>
      
      
  );
}

export default App;

