module.exports = {
    formattedPrice: (price) => {
        return Intl.NumberFormat('vn-VN', {
            currency: 'VND',
        }).format(price);
    }
}