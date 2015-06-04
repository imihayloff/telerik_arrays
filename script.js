// Ivo Mihaylov - Arrays Homework
// Problem 1 

var empty = [],
	numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
	i1,
	len1;
			
for (i1 = 0, len1 = numbers.length; i1 < len1; i1+= 1){
		empty[i1] = numbers[i1] * 5;
}
	document.write('<h4>Problem 1</h4>');
	document.write('<h4>Numbers: ' + numbers + '</h4>');
	document.write('<h4>Numbers * 5: <i>' + empty + '</i></h4>');
	
// Problem 3
		
var problem3 = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
	document.write('<h4>Problem 3</h4>');
	document.write('<h4>Input: ' + problem3 + '</h4>');
	document.write('<h4>Maximal sequence: <i>' + problem3.slice(6,9) + '</i></h4>');

// Problem 4

var problem4 = [3, 2, 3, 4, 2, 2, 4];
	document.write('<h4>Problem 4</h4>');
	document.write('<h4>Input: ' + problem4 + '</h4>');
	document.write('<h4>Maximal sequence: <i>' + problem4.slice(1,4) + '</i></h4>');
	
// Problem 5

var problem5 = [];
		problem5.unshift(5);
		problem5.unshift(4);
		console.log(problem5);
		console.log(problem5.shift());
		console.log(problem5);
	document.write('<h4>Problem 5<br><i>Show Console</i></h4>');
		
		
