function dollarToFloat(amount) {
    for (let i = amount.length; i > -1; i--) {
        if (amount[i] === "$") {
            return parseFloat(amount.slice(i+1))
        }
    }
}

export default dollarToFloat