const { default: ProductModal } = require("../components/modal/ProductModal")

module.exports = {
    useModal: (product, showModal, setShowModal) => {
        setShowModal(true)
        return <ProductModal showModal={showModal} setShowModal={setShowModal} product={product} />
    }
}