module App {
    export class Greeter {
        constructor(public greeting: string) { }
        public greet() {
            return "<h1>" + this.greeting + "</h1>";
        }
    };
}