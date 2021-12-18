var Main = /** @class */ (function () {
    function Main(greeting) {
        var _this = this;
        this.greetings = greeting;
        this.btn = document.createElement("button");
        this.btn.textContent = "say hellow";
        this.btn.addEventListener("click", function () {
            alert(_this.sayHellow());
        });
        this.root = document.getElementById("root");
        this.root.append(this.btn);
    }
    Main.prototype.sayHellow = function () {
        return this.greetings.greetings;
    };
    return Main;
}());
var list = new Array();
list.push({ msn: "saludo 1", date: new Date() });
list.push({ msn: "saludo 2", date: new Date() });
list.push({ msn: "saludo 3", date: new Date() });
var main_dos = new Main({
    greetings: "hola de...",
    anothergreetings: "hola2..",
    list: list
});
//0:36
//CON JAVASCRIPT
/*
class Main {
  constructor(greeting) {
    this.greetings = greeting;
    this.btn = document.createElement("button");
    this.btn.textContent = "say hellow";
    this.btn.addEventListener("click", () => {
      alert(this.sayHellow());
    });
    this.root = document.getElementById("root");
    this.root.append(this.btn);
  }
  sayHellow() {
    return this.greetings.greetings;
  }
}

let main = new Main({ greetings: "hola de..." });

*/
