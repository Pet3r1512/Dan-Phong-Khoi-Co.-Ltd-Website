import { createContext, useContext, useEffect, useState } from 'react'
import '../styles/globals.css'

export const CartContext = createContext()

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [count, setCount] = useState(1);
  const [productList, setProductList] = useState([])

  const context = useContext(CartContext)

  const value = {
    cart, 
    setCart, 
    isSuccess, 
    setIsSuccess, 
    count, 
    setCount, 
    productList, 
    setProductList
  }

  return (
    <CartContext.Provider value={value}>
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp
