import Link from "next/link"

export default function Menu() {
    const MenuItems = navigationLinkInfo.map((item) => {
        return <MenuItem key={item.id} name={item.name} link={item.link} />
    })
    return (
        <>
            <ul className="flex gap-x-4 md:gap-x-14 font-semibold text-lg">
                {MenuItems}
            </ul>
        </>
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