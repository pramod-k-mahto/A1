// console.log("Hello ");
// console.log(a)
// console.log("bye")
// console.log(x);
// let x=null
// x()

// console.log("Hello");
// try {
//   console.log("hello");
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   //   console.log(error.stack);
// } finally {
//   console.log("finally");
// }
// console.log("bye");

let user = {
  Name: "XYZ",
  Age: 20,
};
// user=JSON.stringify(user)
// console.log(user)
// user=JSON.parse(user)
// console.log(user)

// API
// c (f) (Api) - b- database()
// http Methods  - get (read) , post (create ), Put(Update), patch(update single Field) , delete(remove)

// fetch("url Or api Path", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify(user),
// //   credentials: "include",
// });

const getProduct = async () => {
  // pending
  // reject
  // fulfilled
  let response = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });
  response = await response.json();
  response.products.forEach((item) => {
    console.log("Id :" + item.id);
    console.log("Title :", item.title);
    console.log("description: ", item.description);
    console.log("price Rs.", item.price);
  });
};

getProduct();
