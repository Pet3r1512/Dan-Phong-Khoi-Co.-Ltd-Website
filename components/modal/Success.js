import { useEffect } from "react"

export default function Success({isSuccess, setIsSuccess}) {
    if(!isSuccess) return <></>

    useEffect(() => {
        const timer = setTimeout(() => {
            return (
                <div className="bg-green-500 text-xl font-semibold absolute top-4 left-4">
                    <p>Thêm vào giỏ hàng thành công</p>
                </div>
            )
        }, 1000)
        return () => {
            setIsSuccess(false)
            clearTimeout(timer)
        }
    }, [])
    
}