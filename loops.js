// Do your work here
var arr = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
function presidentsArr(presidents){
	for (var i = 0; i < presidents.length; i++){
  
		console.log ("The value of i is:" + i);
  
 		 console.log ("The value at index is:" + arr[i]);
	
}
presidentsArr(arr);

//________________________________________________________________________________ //

function makeStringOfNumbers( ){
	var stringOfNumbers = ('');
	for (var i = 10; i < 21; i++){
    		stringOfNumbers = stringOfNumbers + i;
  	}		
  return stringOfNumbers;
  
}
var result = makeStringOfNumbers();
console.log('Value is:' + result);

//____________________________________________________________________________________//

function makeevenNumberArray(){
	var evenNumberArray = ('');
	for (var i = 0; i < 51; i++){
		evenNumberArray = evenNumberArray + i;
	}
	return evenNumberArray;
}
var result = makeevenNumberArray();
console.log ('Value is: ' + result);

//_____________________________________________________________________________________//

function makeoopsArray(){
  var oppsArray = [ 'turn' , , 'down' , , 'for' , , 'what' ];
	for (var i = 1; i < 6 ; i+=2){
		oppsArray.splice(i,1,"nope");
	}

 console.log (oppsArray);
  return oppsArray;
}
var oppsArray = makeoopsArray();

//______________________________________________________________________________________ //










