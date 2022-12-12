import Link from "next/link"
import { CartContext } from "../../pages/_app"

import { useContext, useEffect } from "react"

export default function Menu() {
    const context = useContext(CartContext)

    const MenuItems = navigationLinkInfo.map((item) => {
        return <MenuItem key={item.id} name={item.name} link={item.link} />
    })
    return (
        <div className="relative">
            <ul className="flex gap-x-4 md:gap-x-14 font-semibold text-lg">
                {MenuItems}
            </ul>
            <p className={`text-red-500 font-bold absolute right-[-5px] top-[-10px] ${context.cart.length === 0 && "hidden"}`}>{}</p>
        </div>
    )
}

const navigationLinkInfo = [
    {
        id: 1,
        name: "Products",
        link: "/",
    },
    {
        id: 2,
        name: "Cart",
        link: "/cart",
    }
]

const MenuItem = (props) => {
    return (
        <Link href={props.link}>
            {props.name}
        </Link>
    )
}