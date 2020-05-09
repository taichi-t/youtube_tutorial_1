var userInput;
var userName;
userInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error occuered!", 500);
