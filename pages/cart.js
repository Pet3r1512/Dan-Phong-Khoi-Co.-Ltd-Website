import { useContext } from "react"
import CartItem from "../components/product/CartItem"
import { CartContext } from "./_app"

export default function Cart(props) {
    const context = useContext(CartContext)
    const carts = [... new Set(context.cart)]
    
    const totalCarts = carts.map((item, index) => {
        return <CartItem key={index} product={item} />
    })

    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <h1>Your Cart!</h1>
            {totalCarts}
        </div>
    )
}