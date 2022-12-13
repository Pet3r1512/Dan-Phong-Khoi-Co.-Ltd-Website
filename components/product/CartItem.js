import Image from "next/image";

import { useState } from "react";
import { formattedPrice } from "../../functions/handlers";

const Amount = ({thisProductCart, setThisProductCart}) => {
  function incrementCount() {
    thisProductCart = thisProductCart + 1;
    setThisProductCart(thisProductCart);
  }
  function decrementCount() {
    thisProductCart = thisProductCart - 1;
    setThisProductCart(thisProductCart);
  }
  return (
    <div className="flex gap-3 items-center">
      <button className={`w-[20px] h-[20px] bg-gray-400 flex items-center justify-center rounded-md ${thisProductCart <=1 ? "cursor-not-allowed" : ""}`} onClick={decrementCount}
      disabled={thisProductCart <= 1 ? true : false}
      >-</button>
      <div>{thisProductCart}</div>
      <button className="w-[20px] h-[20px] bg-gray-400 flex items-center justify-center rounded-md" onClick={incrementCount}>+</button>
    </div>
  );
}

export default function CartItem({product, count, setCount, carts, setCart}) {
  let [thisProductCart, setThisProductCart] = useState(1)
  let currentProduct = product


  const removeFromCart = index =>
    setCart(carts => carts.filter((_, i) => i !== index));

  return (
      <div className="flex w-full gap-5">
          <Image src={product.img} width={300} height={300} alt="" className="w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] object-cover rounded-2xl" />
          <div className="flex flex-col justify-center flex-1">
              <p className="font-bold text-lg break-words">{product.name}</p>
              <p className="font-semibold text-md">{formattedPrice(product.price)} VND</p>
              <div>
                <Amount thisProductCart={thisProductCart} setThisProductCart={setThisProductCart} />
              </div>
              <p className="font-bold text-lg text-red-500">{formattedPrice(product.price * thisProductCart)} VND</p>
              <button 
                className="p-2 rounded-xl w-fit h-fit text-lg flex items-center bg-red-500 text-white"
                onClick={currentProduct => {currentProduct = new Object()}}>
                  Xóa
              </button>
          </div>
      </div>
  )
}