// // (function() {
// //     var obj = {
// //         firstName: 'Tolya',
// //         secondN: 'Vlad',
// //         getName: function() {
// //             return this.firstName;
// //         }
// //     };
// //     var name = obj;
// //     obj = null;
// //     console.log(name.firstName);
// //     console.log(name.getName);
// //     console.log(name.getName());
// // })();
// // next task

// var mul = document.getElementById('multiplication-matrix');
// var setTable = document.getElementById('set-matrix');

// setTable.innerHTML = render(setMatrix(10));
// mul.innerHTML = render(setMulMatrix(10));

// function setMatrix(size) {
// 	var array = [];
// 	for (var i = 0; i < size; i++){
// 		array[i] = []
// 		for (var j = 0; j < size; j++) {
// 			array[i][j] = j + 1;
// 		}
// 	}
// 	return array;
// }

// function setMulMatrix(size) {
// 	var array = [];
// 	for (var i = 0; i < size; i++){
// 		array[i] = []
// 		for (var j = 0; j < size; j++) {
// 			array[i][j] = (j + 1)*(i+1);
// 		}
// 	}
// 	return array;
// }


// function render(array) {
// 	var rowsQty = array.length;
// 	var result = [];
// 	for (var i = 0; i < rowsQty; i++) {
// 		var row = ['<tr><td>', array[i].join(' </td><td>'), ' </td></tr>'].join('');
// 		result.push(row);
// 	}
// 	return result.join('');
// 	}

(function f(f){

    return typeof f();

  })(function(){ return 1; });
