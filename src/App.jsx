import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddressAdd, Addresses, Cart, CheckOut, Home, Login, Restaurants, SingUp, Location, Account, Orders, OrderPlaced, Track, Restaurant, Coupens } from './pages';
import Search from './pages/Search';
import { AddAddress } from './components';



const App = () => (
  <BrowserRouter>

    <Routes>

      <Route path="" element={(<Home />)} />
      <Route path="/search" element={(<Search />)} /> 
      <Route path="/cart" element={(<Cart />)} />
      <Route path="/checkout" element={(<CheckOut />)} />
      
      <Route path="/address" element={(<Addresses />)} />
      <Route path="/locations" element={(<Location />)} />
      <Route path="/address/add" element={(<AddressAdd />)} />

      <Route path="/account" element={(<Account />)} />

      <Route path="/orders" element={(<Orders />)} />
      <Route path="/placed" element={(<OrderPlaced />)} />
      <Route path="/track" element={(<Track />)} />

      <Route path="/restaurants" element={(<Restaurants />)} />
      <Route path="/restaurant" element={(<Restaurant />)} />

      <Route path="/offers" element={(<Coupens />)} />

      <Route path="/login" element={(<Login />)} />
      <Route path="/singup" element={(<SingUp />)} />
   


    </Routes>
  </BrowserRouter>

);

export default App