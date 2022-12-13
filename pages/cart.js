import { useContext } from "react"
import CartItem from "../components/product/CartItem"
import { CartContext } from "./_app"

export default function Cart() {
    const context = useContext(CartContext)
    const carts = [... new Set(context.cart)]

    const totalCarts = carts.map((item, index) => {
        return <CartItem key={index} product={item} count={context.count} setCount={context.setCount} carts={carts} setCart={context.setCart} />
    })

    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-5">
            <h1 className="font-extrabold text-2xl mb-12">Your Cart!</h1>
            <div className="flex flex-col gap-5">
                {totalCarts.length >= 1 ? totalCarts : 
                    <p className="text-xl font-semibold mt-20 text-center">Giỏ hàng trống! <br></br>Vui lòng chọn sản phẩm tại 
                    <a className="text-red-400" href="/"> trang chủ</a>!</p>
                }
            </div>
        </div>
    )
}