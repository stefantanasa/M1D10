let x = "John";
let y = "Doe";

console.log(`${x} <> ${y}`);

let object22 = {
  name: "Stefan",
  surname: "Tanasa",
  email: "st@gmail.com",
};

delete object22.email;
let array = "this is a string with 10 items in it !".split(" ");

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let array100 = [];
for (i = 0; i < 100; i++) {
  number = Math.floor(Math.random() * 1000);
  array100.push(number);
}
console.log(array100);
