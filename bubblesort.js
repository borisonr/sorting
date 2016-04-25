function bubbleSort(arr){
	if(arr.length === 0){
		return [];
	}
	var didsomethinghappen = true;
	var n = 0;
	while(n < arr.length && didsomethinghappen){
		didsomethinghappen = false;
		for(var i = 1; i < arr.length - n; i++){
			if(arr[i-1]>arr[i]){
				var temp = arr[i];
				arr[i]=arr[i-1];
				arr[i-1]=temp;
				didsomethinghappen = true;

			}
		}
		// console.log(arr);
		n++;
	}
	
	return arr;
	
}

