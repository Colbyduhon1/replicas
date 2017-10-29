function findChangesInPrice(numberOfDays, rangeLength, priceArray){
	var subArrays = [];
		while (priceArray.length > 0){
					subArrays.push(priceArray.slice(0,rangeLength))
	}
	return subArrays;

}

console.log(findChangesInPrice(5,3,[188930 194123 201345 154243 154243
]))
