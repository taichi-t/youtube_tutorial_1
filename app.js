function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result" + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// let someValue: undefined;
var combineValue;
combineValue = add;
console.log(combineValue(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});