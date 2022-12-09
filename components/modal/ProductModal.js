import { formattedPrice } from "../../functions/handlers"
import Close from "../icons/close"
import Button from "../product/Button"

export default function ProductModal({product, showModal, setShowModal}) {
    const modalProps = [
        {
            className: "text-xl font-semibold",
            content: product.name,
            label: "",
        },
        {
            className: "text-2xl font-bold text-red-400",
            content: `${formattedPrice(product.price)} VND`,
            label: "",
        },
        {
            className: "text-lg font-medium",
            content: product.unit,
            label: "Đơn vị tính:",
        },
        {
            className: "text-lg font-medium",
            content: product.manufactorDay,
            label: "Ngày sản xuất:",
        },
        {
            className: "text-lg font-medium",
            content: product.expiredDay,
            label: "Ngày hết hạn:",
        },
        {
            className: "text-lg font-medium",
            content: product.productType,
            label: "Loại:",
        },
    ]
    if(!showModal || Object.keys(product).length === 0) {return <></>}

    const modalDetails = modalProps.map((item, index) => {
        return <p key={index}>{item.label} <span className={item.className}>{item.content}</span></p>
    })

    return (
        <div className={`fixed top-0 left-0 z-[9] bg-white/90 w-full h-screen ${!showModal ? "hidden" : ""}`}>
            <div className="bg-white shadow-xl shadow-gray-500/40 max-w-[700px] max-h-[700px] relative z-10 opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-2xl p-10 gap-y-6">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-x-12">
                    <button className="absolute top-2 right-2" onClick={() => {setShowModal(false)}}>
                        <Close />
                    </button>
                    <img src={product.img} alt="" className="w-[250px] h-[250px] object-cover rounded-2xl" />
                    <div className="flex flex-col">
                        {modalDetails}
                    </div>
                </div>
                <Button content="Buy" icon={"addCart"} bgColor={"bg-red-400"} />
            </div>
        </div>
    )
}