// Do your work here
var arr = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
function presidentsArr(presidents){
	for (var i = 0; i < presidents.length; i++){
  
		console.log ("The value of i is:" + i);
  
 		 console.log ("The value at index is:" + arr[i]);
	
}
presidentsArr(arr);

//________________________________________________________________________________//

function makeStringOfNumbers( ){
	var stringOfNumbers = ('');
	for (var i = 10; i < 21; i++){
    		stringOfNumbers = stringOfNumbers + i;
  	}		
  return stringOfNumbers;
  
}
var result = makeStringOfNumbers();
console.log('Value is:' + result);

