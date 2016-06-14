var App;
(function (App) {
    var Greeter = (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            return "<h1>" + this.greeting + "</h1>";
        };
        return Greeter;
    }());
    App.Greeter = Greeter;
    ;
})(App || (App = {}));

var App;
(function (App) {
    var Program = (function () {
        function Program() {
            this._greeter = new App.Greeter("Hello, world!");
        }
        Program.prototype.main = function () {
            document.body.innerHTML = this._greeter.greet();
        };
        return Program;
    }());
    App.Program = Program;
    ;
})(App || (App = {}));
// point of entry
var program = new App.Program();
program.main();

//# sourceMappingURL=output.js.map
