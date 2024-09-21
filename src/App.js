
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/User/Home';
import Product from './pages/User/Product';
import CartPage from './pages/User/CartPage';
import Paymentsection from './pages/User/Paymentsection';
import OrderShowPage from './pages/User/OrderShowPage';
import ProfilePage from './pages/User/ProfilePage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
       <Route path='/cart' element={<CartPage/>}/>
       <Route path='/payment' element={<Paymentsection/>}/>
       <Route path='/showorder' element={<OrderShowPage/>}/>
       <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
