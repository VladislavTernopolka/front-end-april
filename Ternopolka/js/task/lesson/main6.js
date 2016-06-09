// function sum(a) {
// 	return function(b) {
// 		return function(c) {
// 			return a + b + c;
// 		}
// 	};
// };

// console.log(sum(1)(2)(3));
//next task 
// var Closure = (function() {
// 	var text = "Hello";
// 	function getName(name) {
// 		return text + ' ' + name;
// 	}
// 	return {
// 		getName : function(name){
// 			return contact(name);
// 		}
// 	}
// })

// var greeting = Closure();
// console.log(greeting.getName('Vlad'));
// next task
var Closure = function() {
    var text = '';
    return function(name) {
        if (name) {
            text += ' ' + name;
        } else {
            return text;
        }

    }
}

var buffer = makeBuffer();
