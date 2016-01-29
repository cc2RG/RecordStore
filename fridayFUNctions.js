var myArray = [1,2,3,4,5,6];


var myForEach = function(array, whatToDoWithEachElement){
  for (item of array) {
    whatToDoWithEachElement(item);
  }
}


var displayElement = function(element){
  console.log(element);
}


myForEach(myArray, displayElement);