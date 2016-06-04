function foo () {
	var result = [];
	for (var i = 0; i < arguments.length; i++) {
	 	result.push(arguments[i]);
	} 
	console.log(result.join(' - '));
	console.log(arguments.length);
}