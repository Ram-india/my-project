import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal';

function App() {
  const[cartItems, setCartItems]  = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);


  

  const openCart = () => {
    setIsCartOpen(true);
  }
  const closeCart = () => {
    setIsCartOpen(false);
  }
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    setTotalPrice(totalPrice - product.price);
    console.log(product.price);
  }

  return (
    <div className='min-h-screen'>
    <Navbar  cartCount={cartItems.length} openCart={openCart}/>
    <ProductList cartItems ={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
    {
      isCartOpen&&(
      <CartModal cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)
    }
    </div>
  )
}

export default App
