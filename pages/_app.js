import { createContext, useContext, useEffect, useState } from 'react'
import '../styles/globals.css'

export const CartContext = createContext()

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)

  const context = useContext(CartContext)

  return (
    <CartContext.Provider value={{cart, setCart, isSuccess, setIsSuccess}}>
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp
