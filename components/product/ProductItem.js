import Image from "next/image"
import Button from "./Button"

import { formattedPrice } from "../../functions/handlers"

import { CartContext } from "../../pages/_app"
import { useContext } from "react"

export default function ProductItem(
    {
        product, 
        setShowModal, 
        clickedProduct, 
        setClickedProduct, 
        buyedProduct, 
        setBuyedProduct,
        isSuccess,
        setIsSuccess,
        count,
        setCount,
    }){
    const context = useContext(CartContext)

    return (
        <div className="mx-auto">
            <Image src={product.img} width={300} height={300} alt="" className="w-[300px] h-[300px] object-cover rounded-2xl" />
            <h3 className="font-medium text-lg my-2">{product.name}</h3>
            <h2 className="text-lg font-medium mb-4">
                Price: <span className="text-xl font-semibold text-red-500">{formattedPrice(product.price)} VND</span>
            </h2>
            <div className="flex justify-between">
                <Button 
                    content="More" 
                    icon={"info"} 
                    bgColor={"bg-blue-500"} 
                    onClick={() => {
                        setShowModal(true)
                        setClickedProduct(product)
                    }}
                />
                <Button 
                    content="Buy" 
                    icon={"addCart"} 
                    bgColor={"bg-red-400"} 
                    className={`${isSuccess ? "bg-green-300" : ""}`}
                    onClick={() => {
                        context.cart.push(product)
                        context.setCart(context.cart)
                        // context.productList.push(product)
                        // console.log(context.productList)
                        // context.setProductList(() => {new Set(context.productList)})
                    }}
                />
            </div>
        </div>
    )
}