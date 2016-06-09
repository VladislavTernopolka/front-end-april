var expresion, result;
while (true) {
    expresion = prompt("Enter an expresion");
    if (expresion == null) break;
    try {
        result = eval(expresion)

        if (isNaN(result)) {
            throw new Error("Непраильнoe выражениео")
        }
        break;
    } catch (error) {
        alert("Not correct input : " + error.message)
    }

}
alert(result);
