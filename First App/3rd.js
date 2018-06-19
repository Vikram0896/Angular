var Welcome = /** @class */ (function () {
    function Welcome() {
    }
    Welcome.prototype.greet = function () {
        console.log("Hello");
    };
    return Welcome;
}());
var obj = new Welcome();
obj.greet();
