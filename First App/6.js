function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var dic = price * rate;
    console.log("Discount:", +dic);
}
calculate_discount(10);
calculate_discount(10, 2);
