var perform;
var stop = true;


while (stop) {
	perform = prompt ("Enter what mobe you want!")
	var number1 = +prompt ("Enter ");
	var number2 = +prompt ("Enter !");
	console.log (perform)
	switch(perform) {
	 	case "Addition":
	 		console.log(number2 + number1);
	 		break;
	 	case "That`s all":
	 	stop = false;
	 		break;
	 	default:
	 		console.log ("Wrong opperation")
	 }
	
}