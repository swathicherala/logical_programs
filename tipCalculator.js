function tipCalculator(amount, tip, locale, currency){
    let result = []
    for(let i=0 ; i<tip.length; i++){
        let tipAmount = (amount * tip[i]) / 100
        // tipAmount = tipAmount.toFixed(2)
        result.push(tipAmount)
        const formatter = Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency
        })
        result.push(formatter.format(tipAmount))
    }
    return result
}
console.log(tipCalculator(1000, [5, 10, 15], "en-EN", "INR"))
console.log(tipCalculator(6000, [4, 2, 8],  "en-EN", "USD"))