
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          <Route path='/womens' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path=':productId' element={<Product/>}/>

          </Route>
          
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
