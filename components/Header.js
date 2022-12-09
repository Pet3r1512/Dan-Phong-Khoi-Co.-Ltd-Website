import Menu from "./header/Menu";

export default function Header() {
    return (
        <div className="w-full min-h-[50px] mb-14 flex justify-between items-center">
            <h1 className="font-bold text-2xl cursor-pointer">Dan Phong Khoi Co.Ltd Official Website</h1>
            <Menu />
        </div>
    )
}