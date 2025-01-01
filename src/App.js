
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/User/Home';
import Product from './pages/User/Product';
import CartPage from './pages/User/CartPage';
import Paymentsection from './pages/User/Paymentsection';
import OrderShowPage from './pages/User/OrderShowPage';
import ProfilePage from './pages/User/ProfilePage';
import Registration from './pages/Registration'
import Login from './pages/Login'
import Shop from './pages/User/Shop';
import AdminRouter from './components/Admin/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AllOrders from './pages/Admin/AllOrders';
import UserReview from './pages/Admin/UserReview'
import AllProducts from './pages/Admin/AllProducts';
import AllUsers from './pages/Admin/AllUsers';
import OrderDetails from './pages/Admin/OrderDetails';
import ProductView from './pages/Admin/ProductView';
import AddProducts from './pages/Admin/AddProducts';
import UserDetails from './pages/Admin/UserDetails';
import WishListPage from './pages/User/WishListPage';




function App() {
  return (
    <div className="App">
      <Routes>

    {/* User-Side Routes */}
       <Route path='/' element={<Home/>}/>
       <Route path='/product/:id' element={<Product/>}/>
       <Route path='/cart' element={<CartPage/>}/>
       <Route path='/wishlist' element={<WishListPage/>}/>
       <Route path='/payment' element={<Paymentsection/>}/>
       <Route path='/showorder' element={<OrderShowPage/>}/>
       <Route path='/profile' element={<ProfilePage/>}/>
       <Route path='/signup' element={<Registration/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/shop' element={<Shop/>}/>

       {/* admin-Side Routes */}
       <Route path='/admin' element={<AdminRouter><AdminDashboard/></AdminRouter>}/>
       <Route path='/admin/orders' element={<AllOrders/>}/>
       <Route path='/admin/reviews' element={<UserReview/>}/>
       <Route path='/admin/products' element={<AllProducts/>}/>
       <Route path='/admin/users' element={<AllUsers/>}/>
       <Route path='/admin/details/:userId' element={<OrderDetails/>}/>
       <Route path='/admin/pro-details/:id' element={<ProductView/>}/>
       <Route path='/admin/add-product' element={<AddProducts/>}/>
       <Route path='/admin/user-details/:id' element={<UserDetails/>}/>
  
      </Routes>
    </div>
  );
}

export default App;
