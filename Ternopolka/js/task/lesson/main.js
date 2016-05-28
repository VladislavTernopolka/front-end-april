var i = 0;
for (; i < 5; i+=1) {
	var mark = prompt('Enter mark');
	if(mark >= 60 ) {
		console.log ('Passed')
	} else {
		break;
	}
}