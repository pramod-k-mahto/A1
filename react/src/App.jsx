import { useState } from "react";
function App() {
  const [user, setUser] = useState({
    fName: "",
    email: "",
    phone: "",
  });
  const handelChange = (e) => {
    setUser((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(user);

    // api call
    // let response = await fetch("url", {
    //   method: "patch",
    //   headers: {
    //     content: "application/json",
    //   },
    //   body: JSON.stringify(user),
    // });
    // response = await response.json();
    // console.log(response);

    setUser({
      fName: "",
      email: "",
      phone: "",
    });
    alert("Form Is Submitted");
  };
  return (
    <div>
      <h1> Form in React </h1>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <label htmlFor="name">Name</label>
        <br />
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          name="fName"
          type="text"
          placeholder="Enter Your Name"
          value={user.fName}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          onChange={(e) => {
            handelChange(e);
          }}
          name="phone"
          type="tel"
          placeholder="Enter Your Phone "
          value={user.phone}
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />

        <input
          onChange={(e) => {
            handelChange(e);
          }}
          name="email"
          type="email"
          placeholder="Enter Your Name"
          value={user.email}
        />
        <br />
        <br />

        <button>Submit </button>
      </form>
    </div>
  );
}

export default App;
