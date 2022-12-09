import Image from "next/image"
import Button from "./Button"

import { formattedPrice } from "../../functions/handlers"

export default function ProductItem({product, setShowModal, setClickedProduct}) {
    return (
        <div className="mx-auto">
            <Image src={product.img} alt="" className="w-[300px] h-[300px] object-cover rounded-2xl" />
            <h3 className="font-medium text-lg my-2">{product.name}</h3>
            <h2 className="text-lg font-medium mb-4">
                Price: <span className="text-xl font-semibold text-red-500">{formattedPrice(product.price)} VND</span>
            </h2>
            <div className="flex justify-between">
                <Button 
                    content="More" icon={"info"} bgColor={"bg-blue-500"} 
                    onClick={() => {
                        setShowModal(true)
                        setClickedProduct(product)
                    }}/>
                <Button content="Buy" icon={"addCart"} bgColor={"bg-red-400"} />
            </div>
        </div>
    )
}