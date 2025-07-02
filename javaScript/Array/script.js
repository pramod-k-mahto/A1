// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(typeof nums)
// console.log(nums[2])
// nums.length>index
// console.log(nums.length)
// console.log(nums[0])
// console.log(nums[1])
// console.log(nums[2])

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 100];
// let isExit = true;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] == 100) {
//     isExit = true;
//     break;
//   } else {
//     isExit = false;
//   }
// }
// if (isExit) {
//   console.log("exit");
// } else {
//   console.log("not exit");
// }

// const user = {
//   [key]: value,
// };

// let user = {
//   name: "ABC",
//   age: 20,
//   phone: 9800841208,
// };
// Accessing object (Read)
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.phone);
// console.log(user["name"])
// console.log(user["age"])
// console.log(user["phone"])
// Update  object
// user.name = "xyz";
// console.log(user);
// // delete
// delete user.name;
// console.log(user);
// // add
// user.address = "ktm";
// console.log(user);

// const userList = [
//   { name: "ABC", age: 20, phone: 9800841208 },
//   { name: "xyz", age: 30, phone: 9811841208 },
// ];

// // map , filter reduce,forEach
// outer((a) => {
//   console.log(a);
// });

//Array Methods
//  map , filter reduce,forEach

// forEach
// let values = [1, 2, 3, 4, 5];
// values.forEach((a, index) => {
//   console.log(a, index);
// });

// map
// let values = [1, 2, 3, 4, 5];
// const newArr = values.map((item) => {
//   return item * 2;
// });
// console.log(newArr);
//filter
// let values = [1, 2, 3, 4, 5, 10];
// const filterArr = values.filter((item) => {
//   return item > 3;
// });
// console.log(filterArr);

// let values = [1, 2, 3, 4, 5, 10];
// let z = values.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(z);

//  let values = [1, 2, 3, 4, 5, 10];
//push
//  values.push(12,21,100)

//pop

// values.pop()
// let x=values.pop()
// console.log(x)
//  console.log(values)

//unshift
// values.unshift(101,102)
// console.log(values)
// let x=values.shift()
// console.log(x)
// console.log(values)
//  let values = [1, 2, 3, 4, 5, 10];
// slice
// let part =values.slice(1)
// console.log(part)
// values.splice(1,2,101)
// console.log(values)

//  let values = [1, 2, 3, 4, 5, 10];
// let val2=[100,100,100]
// let val3=[102,101,105]
// let v3=values.concat(val2,val3)
// console.log(v3)

// find

// let userList = [
//   {
//     id: 1,
//     name: "abc",
//   },

//   {
//     id: 2,
//     name: "xyz",
//   },
//   {
//     id: 3,
//     name: "mno",
//   },
// ];
// const found = userList.find((item) => {
//   return item.id == 3;
// });
// console.log(found);
