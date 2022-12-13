import { useContext, useState } from 'react'
import { CartContext } from '../pages/_app'

import ProductModal from "./modal/ProductModal"
import ProductItem from "./product/ProductItem"

export default function Product() {
    const [showModal, setShowModal] = useState(false)
    const [clickedProduct, setClickedProduct] = useState({})
    const [buyedProduct, setBuyedProduct] = useState({})

    const context = useContext(CartContext)

    // GET DATA FROM MSSQL-------------------------------------------------------------
    // useEffect(() => {
    //     async function getData() {
    //         const apiUrlEndPoint = `https://localhost:3000/assets/db/db`
    //         const response = await fetch(apiUrlEndPoint)
    //         const res = await response.json()
    //         console.log(res)
    //     }
    //     getData()
    // }, [])

    const Products = demoProducts.map((item, index) => {
        return (
            <ProductItem 
                key={index} 
                product={item} 
                setClickedProduct={setClickedProduct} clickedProduct={clickedProduct} 
                setShowModal={setShowModal} 
                buyedProduct={buyedProduct}
                setBuyedProduct={setBuyedProduct}
                count={context.count}
                setCount={context.setCount}
            />
        )
    })
    return (
        <div className={`z-[8] box-border relative`}>  
            {clickedProduct && <ProductModal product={clickedProduct} showModal={showModal} setShowModal={setShowModal} />}
            <h2 className="font-semibold text-xl mb-14">All products</h2>
            <div className="grid place-content-center gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {Products}
            </div>
        </div>
    )
}

export const demoProducts = [
    {
        id: 1,
        name: "Hoạt huyết nhất nhất",
        price: 79000,
        manufactorDay: "09/12/2022",
        expiredDay: "09/12/2023",
        amount: 100,
        unit: "box",
        productType: "Vitamin",
        img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjdHMlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Xương khớp Tâm Bình",
        price: 99000,
        manufactorDay: "12/09/2022",
        expiredDay: "12/09/2023",
        amount: 125,
        unit: "box",
        productType: "Protein",
        img: "https://images.unsplash.com/photo-1621872314880-a9504b5af5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdHMlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Viên uống tăng chiều cao",
        price: 139000,
        manufactorDay: "11/02/2022",
        expiredDay: "11/02/2023",
        amount: 30,
        unit: "box",
        productType: "Mineral",
        img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY3RzJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Tinh dầu mọc tóc",
        price: 259000,
        manufactorDay: "21/11/2022",
        expiredDay: "21/11/2023",
        amount: 90,
        unit: "bottle",
        productType: "probiotic",
        img: "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY3RzJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Nước uống bổ sung Collagen",
        price: 499000,
        manufactorDay: "27/08/2022",
        expiredDay: "27/02/2022",
        amount: 5,
        unit: "bottle",
        productType: "natural",
        img: "https://images.unsplash.com/photo-1530914547840-346c183410de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZhY3RzJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Viên uống bổ sung Axit béo",
        price: 229000,
        manufactorDay: "30/10/2022",
        expiredDay: "30/10/2023",
        amount: 23,
        unit: "box",
        productType: "axit",
        img: "https://images.unsplash.com/photo-1498603911539-01ce6c9ad8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY3RzJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    
]