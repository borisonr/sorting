function split(wholeArray){
	if (wholeArray.length <= 1){
		return wholeArray;
	}
	var arr1 = wholeArray.slice(0, wholeArray.length/2);
	var arr2 = wholeArray.slice(wholeArray.length/2);
	return [arr1, arr2];
};

// function merge(babyArray1, babyArray2){
// 	if (babyArray1.length <= 1 && babyArray2 <= 1){
// 		// change this?
// 		return [];
// 	}
// 	var temp;
// 	var finalArray = [];
// 	while(babyArray1){
// 		for (var i = 0; i < babyArray2.length; i++) {
// 			// if(babyArray1 && babyArray2){
// 				if(babyArray1[i] <= babyArray2[i]){
// 					temp = babyArray1.shift();
// 					finalArray.push(temp);
// 				}
// 				else{
// 					temp = babyArray2.shift();
// 					finalArray.push(temp);
// 				}
// 		}
// 	}


// 			// }
	
// 	finalArray.push(babyArray2);
			
// 			// else{
// 			// 	finalArray.push(babyArray1);
// 			// }
// 		// }
// 	// }
// 	return finalArray;
// }

function merge(babyArray1, babyArray2){
	var finalArray = [];
	while (babyArray2.length > 0 && babyArray1.length > 0){
		if (babyArray1[0] > babyArray2[0]){
			finalArray.push(babyArray2[0]);
			babyArray2.shift();
		}
		else {
			finalArray.push(babyArray1[0]);
			babyArray1.shift();
		}
	}
	while (babyArray1.length > 0){
		// if(babyArray1.length ==1){
		// 	finalArray.push(babyArray1);
		// }
		// else{
		// 	finalArray.push(merge(split(babyArray1)));
		// }
		finalArray.push(babyArray1[0]);
		babyArray1.shift();
	}
	
	while (babyArray2.length > 0){
		finalArray.push(babyArray2[0]);
		babyArray2.shift();
	}
	return finalArray;
}

function mergeSort(arr){
	// var finalArray = [];
	// if(arr.length = 0){
	// 	return finalArray;
	// }
	// else{
	// 	finalArray.push(arr.split);
	// 	finalArray = mergeSort(finalArray);
	// }
	// for(var i = 0; i < finalArray.length; i++){

	// }

	if (arr.length < 2){
		return arr;
	}

	// var mid = Math.floor(arr.length/2);
	// var left = mergeSort(arr.slice(0, mid));
	// var right = mergeSort(arr.slice(mid));
	var temp = split(arr);

	return merge(left, right);

}