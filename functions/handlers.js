module.exports = {
    formattedPrice: (price) => {
        return Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(price)
    }
}