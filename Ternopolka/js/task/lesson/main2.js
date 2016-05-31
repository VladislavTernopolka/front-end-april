function clone(array) {
    //if (!isArray (array)) {
    //	returnt throw new Error ('enter an array') /* для показа ошибки и остановки программу*/
    //}
    var clone = [],
        i = 0,
        len = array.length;

    for (; i < len; i++) {
        clone[i] = array[i];
    }

    return clone;
}

var a = [1, 2, 3, [4, 5]];
var b = clone(a);
var c = a;
console.log(" a : ", a);
console.log(" b : ", b);
console.log(" c : ", c);
console.log("after push")
b[3].push(6);
b.push(6);
c.push(7);
console.log(" a : ", a);
console.log(" b : ", b);
console.log(" c : ", c);
