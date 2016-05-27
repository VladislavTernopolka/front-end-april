var a = +prompt('Vvedite a');

var mark;

if (100 >= a && a >= 95) {
	mark = 'A';
} else if (94 >= a && a >= 85) {
	mark = 'B';
} else if (84 >= a && a >= 75) {
	mark = 'C';
} else if (74 >= a && a >= 65) {
	mark = 'D';
} else if (64 >= a && a >= 60) {
	mark = 'E';
} else if (59 >= a && a >= 0) {
	mark = 'FX';
} else {
	mark = 'NEt takogo chisla';
}

alert (mark);
