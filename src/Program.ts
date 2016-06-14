module App {
    export class Program {
        private _greeter = new Greeter("Hello, world!");
        public main() {
            document.body.innerHTML = this._greeter.greet();
        }
    };
}

// point of entry
var program = new App.Program();
program.main();