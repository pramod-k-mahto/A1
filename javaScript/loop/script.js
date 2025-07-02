// console.log("Hello  kjh bsdohbfslj  kjs dvsja skjbvdhksjv  ojnsiv ");
// alert("hello")
// let name=prompt("Enter Your Name")
// console.log(name)
// alert(name)
// document.writeln("Hello  js");

// data type
// op
// variable
// let var const
// if

// data type  (2)
//  Primitive data type(7)
// 1. string
// '' ,"",``
// let x = 100;
// let fullName = `sipalayajshvbksjbhvku87246873  ${x}  `;
// console.log(fullName);
// console.log(typeof fullName);
// 2. number
// let num = 1212211;
// console.log(num);
// console.log(typeof num);
// 3. boolean (true And false)
// let isTrue = false;   // 0 / true>>1
// console.log(isTrue);
// console.log(typeof isTrue);
// 5. undefined (empty)
// let x;
// console.log(x)
// console.log(typeof x)
// 4. null   (Empty)
// let x = null;
// console.log(x);
// console.log(typeof x);
// 6. symbol()

// let a = Symbol("Hello");
// let b = Symbol("Hello");
// console.log(a == b);
// 7. BigInt()
// let x=121212121212121212188778787686n
// let x=BigInt(87346538837465374637478)
// console.log(x)
// console.log(typeof x)
//  Non-primitive data type
// 1.Array
// let arr = [1, 12, "Hello", true, false, null];
// console.log(arr);
// console.log(typeof arr);
// arr = {
//   0: 1,
//   1: 12,
//   2: "Hello",
// };
// console.log(arr[0])
// 2.function
// f(x) = x

// function Print() {
//   console.log(" Hi i Am Ram");
// }
// Print();
// console.log(Print);
// console.log(typeof Print);
// 3.object etc.
// let obj={
//     [key]:[value]
// }
// let obj = {
//   name: "Ram",
//   age: 20,
//   phone: 9800841208,
// };
// console.log(obj);
// console.log(typeof obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.phone);
// console.log(obj["age"]);
// console.log(obj["name"]);
// console.log(obj["phone"]);
// let n =true
// console.log(n+false+n)

// Arithmetic Operators Example

// let x = 5;
// x++  // x=x+1
// x-- // x=x-1
// console.log(++x);
// console.log(--x);

// JavaScript Comparison Operators
// ===

// let z=9
// let c="9"
// console.log(z==c)
// !
// console.log(!false)
// not equal (!=)
// console.log(z!==c)
// ternary operator (?)
// console.log(!true ? "Hello" : "bye");
// &&
// data type
// op
// variable
// let var const
// if
// variable
// let x=10
// console.log(x)
// console.log(x)
// l 5 $, _
// 1bum=1
// full

// var let  const

// var
// var x=9
// console.log(x)
// x=10  // allow update
// console.log(x)

// var x=100   // allow redefined or redeclare
// console.log(x)
// var y = 10;
// {
// y=100
//   console.log(y);  global  scope
// }

// console.log(y);

// const
// const x=10
// x=100  // Not allow update
// console.log(x)
//  const x=100  // not allow redefined or redeclare

// {
//   const c = 100; //  blocked scope
//   console.log(c)
// }

// console.log(c);

// let

// let x = 10;
// x = 20; // allow update
// console.log(x);
// // let x=200  // Cannot redeclare block-scoped

// {
//   let y = 100;
//   console.log(y);
// }

// console.log(y); // block-scoped variable can not access out of the scope
// let z = 10;
// {
//   let c = 12;
//   console.log(z);
//   z = 100;
// }
// console.log(z);
// hoisting in js

// console.log(z)
// var z=90
// console.log(x)
// let x=90
// conditional statement
// let age = 10;
// if (age < 10) {
//   console.log("Child");
// } else if (age < 20) {
//   console.log("teen");
// } else {
//   console.log(" old");
// }

// loop   (types 3 )

// 1.  for
// 2.  while
// 3.do   while

// for
// var count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     count++;
//   }
// }
// console.log(count);
// 100-1
// 11X1=11
// 11X2=22

// prime   7  1 ,7
// let isPrime = true;
// let n = 5;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     isPrime = false;
//   }
// }
// if (isPrime) {
//   console.log(" prime");
// } else {
//   console.log(" not prime");
// }

// 1.  for
// 2.  while
// 3.do-while
// 2.  while
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// 3.do-while
// let i = 0;
// do {
//   console.log("Hello", i);
//   i++;
// } while (i > 5);

// const arr = [
//   [1, 2, 3, 4, 5],
//   [12, 13, 14, 15],
// ];
// 1
// 2
// // 3
// // 4

// let product = [];
// const calculate = (action) => {
//   switch (action.type) {
//     case "add": {
//     }
//     case "remove": {
//     }
//     default: {
//       return;
//     }
//   }
// };
// calculate({
//   type: "add",
//   payload: { id: 1, name: "Apple", price: 100, qty: 1 },
// });

// const arr = [
//   [1, 2, 3, 4, 5, 6],
//   [12, 13, 14, 15],
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     // console.log(i);
//     // console.log(j);
//     console.log(arr[i][j]);
//   }
// }
