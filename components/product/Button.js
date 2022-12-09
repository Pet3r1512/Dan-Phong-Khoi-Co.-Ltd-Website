import { Cart, Info } from "../icons/_icon"

export default function Button({bgColor, content, icon, onClick}) {
    return (
        <button 
            className={`w-[45%] h-[35px] rounded-2xl ${bgColor} text-white flex items-center px-2 justify-center gap-x-2`}
            onClick={onClick}
        >
            <span>{content}</span>
            {icon==="info" && <Info />}
            {icon==="addCart" && <Cart />}
        </button>
    )
}