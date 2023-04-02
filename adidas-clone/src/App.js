import './App.css';
import { Navbar, Footer } from './component';
import { Home, Men, Shop, Product, Login, Register, Cart, CheckOut, OrderStatus, ErrorPage, SuccessPage, OrderTracking, ShopFilter, ShopSearch } from './page';
import { HashRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import {AuthProvider} from './context/AuthContext';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/shop/search' element={<ShopSearch/>}></Route>
          <Route path='/shop/filter' element={<ShopFilter/>}></Route>
          <Route path='/shop/product/:product_id'  element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
          <Route path ='/ordertracking' element={<OrderTracking/>}></Route>
          <Route path='/orderstatus/:order_id' element={<OrderStatus/>}></Route>
          <Route path='/error' element={<ErrorPage/>}></Route>
          <Route path = '/success' element={<SuccessPage/>}></Route>
        </Routes>
        <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
