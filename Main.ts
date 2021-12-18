interface ItemGreetiengs {
  msn: string;
  date: Date;
}
interface IGreeting {
  greetings: string;
  anothergreetings: string;
  list: Array<ItemGreetiengs>;
}
class Main {
  greetings: IGreeting;
  btn: HTMLButtonElement;
  root: HTMLElement;
  constructor(greeting: IGreeting) {
    this.greetings = greeting;
    this.btn = document.createElement("button");
    this.btn.textContent = "say hellow";
    this.btn.addEventListener("click", () => {
      alert(this.sayHellow());
    });
    this.root = document.getElementById("root");
    this.root.append(this.btn);
  }
  sayHellow(): string {
    return this.greetings.greetings;
  }
}
let list: Array<ItemGreetiengs> = new Array();
list.push({ msn: "saludo 1", date: new Date() });
list.push({ msn: "saludo 2", date: new Date() });
list.push({ msn: "saludo 3", date: new Date() });
let main_dos = new Main({
  greetings: "hola de...",
  anothergreetings: "hola2..",
  list,
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
