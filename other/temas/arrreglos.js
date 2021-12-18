const list = [];
const list2 = [1, 23, 4, 3, 3, 2, 3];
const list3 = ["Nissan", "Toyota", "foo"];
const list4 = [1, "dsfhdjsf", { name: "soy un obj" }];
// list.push("otro valor 1");
// list.push("otro valor 2");
// list.push("otro valor 3");
// list.push("otro valor 4");
// list.pop();
let [, item2] = list3;
console.log(item2);
//list3.push("Suzuki"); // mutamos a la variables list
//inmutable de datle valores
let anotherlist = [...list3, "Suzuki"];
console.log(anotherlist);
//map lambda =>
// const unafuncion = () => {}; ->
const newlist = list2.map((item) => {
  return item * item;
});
const newfilter = list2.filter((item) => {
  if (item % 2 == 0) {
    return true;
  }
  return false;
});
// const orderList = list2.sort((a, b) => {
//   return b - a;
// });
const orderList = anotherlist.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  return -1;
});

console.log(orderList);
