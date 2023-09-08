import { useState } from "react";
import "./App.css";

function App() {
  //   const[firstname,setfirstname] = useState("");
  //   const[lastname,setlastname] = useState("");

  //   function changefirstnameHandler(e){
  //     //  console.log(e.target.value);
  //     setfirstname(e.target.value);
  //   }

  //   function changelastnameHandler(e){
  //     // console.log(e.target.value );
  //     setlastname(e.target.value);
  //  }

  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    streetAddress: "",
    candidates: false,
  });

  function changeHandler(e) {
    const { name, type, checked, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function subbmitHandler(e) {
    e.preventDefault();
    console.log("saved data is :");
    console.log(formdata);
  }

  return (
    <div>
      <form onSubmit={subbmitHandler} className="form">
        <label htmlFor="firstname">First Name</label>
        <br />
        <input className="firstname"
          type="text"
          placeholder="Daksh"
          onChange={changeHandler}
          name="firstname"
          id="firstname"
          value={formdata.firstname}
        />
        <br />
        <label htmlFor="lastname" className="lastname">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="Pandey"
          onChange={changeHandler}
          name="lastname"
          id="lastname"
          value={formdata.lastname}
        />
        <br />
        <label htmlFor="email" className="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="daksh2003@gmail.com"
          onChange={changeHandler}
          name="email"
          id="email"
          value={formdata.email}
        />
        <br />
        <label htmlFor="country" className="country">Country</label>
        <br />
        <select className="countryname"
          name="country"
          id="country"
          value={formdata.country}
          onChange={changeHandler}
        > 
          <option>India</option>
          <option>America</option>
          <option>Srilanka</option>
          <option>Pakistan</option>
        </select>
        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input className="streetAddress"
          type="text"
          placeholder="B-24C"
          onChange={changeHandler}
          name="streetAddress"
          id="streetAddress"
          value={formdata.streetAddress}
        />
        <br />
        <label htmlFor="candidates" className="chheckbox">Am I Eligible</label>
        <input
          name="candidates"
          id="candidates"
          type="checkbox"
          checked={formdata.candidates}
          onChange={changeHandler}
        />
        <br />
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default App;
