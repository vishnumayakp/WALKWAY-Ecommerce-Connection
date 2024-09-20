
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/User/Home';
import Product from './pages/User/Product';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
