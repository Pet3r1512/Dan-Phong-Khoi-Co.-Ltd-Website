import Image from "next/image";

import { useState } from "react";

const Amount = ({count, setCount}) => {
    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    function decrementCount() {
      count = count - 1;
      setCount(count);
    }
    return (
      <div className="flex">
        <button className={`${count <=0 ? "cursor-not-allowed" : ""}`} onClick={decrementCount}
        disabled={count <= 0 ? true : false}
        >-</button>
        <div>{count}</div>
        <button onClick={incrementCount}>+</button>
      </div>
    );
}

export default function CartItem({product}) {
    let [count, setCount] = useState(1);
    return (
        <div className="flex">
            <Image src={product.img} width={300} height={300} alt="" className="w-[300px] h-[300px] object-cover rounded-2xl" />
            <div className="flex flex-col">
                <div>
                    <p>{product.name}</p>
                    <p>{product.type}</p>
                </div>
                <p>{product.price}</p>
                <p><Amount count={count} setCount={setCount} /></p>
                <p>{product.price * count}</p>
            </div>
        </div>
    )
}