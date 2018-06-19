function calculate_discount(price:number,rate:number = 0.50) 
{
	var dic= price * rate;
	console.log("Discount:",+ dic);
}

calculate_discount(10);
calculate_discount(10,2)	