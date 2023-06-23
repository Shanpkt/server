 
import React, { useState } from "react";




const Register = () => {
  

// const initialFormData = {
//   name : "",
//   email:"",
//   password:"",
//   confirmPassword:""
// }

const [data, setData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const [status,setStatus] = useState(null)


const handleChange = (event) => {
  let{name,value} = event.target;
  setData({ ...data, [name]: value });
  console.log(name,value)
  
  
}
const handleSubmit = (event) => {
 //event.preventDefault();
//   if (!data.name || !data.password || data.email || data.confirmPassword) {
//     setStatus(false);
//   } else {
//     setStatus(true);
//   }
  console.log("hello");
  
};

console.log(data)

  return (
    <>
    
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  id="name"
                  placeholder="Enter Your Full Name"
                  onChange={handleChange}
                />
            

             
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  id="email"
                  placeholder="Enter Your Email ID"
                  onChange={handleChange}
                />
             
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                />
            
                <input
                  type="password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  id="confirmPassword"
                  placeholder="Confirm Your password"
                  onChange={handleChange}
                />
             
              <button type="button" id="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button type="button" id="reset">
                Reset
              </button>
          
           
    </>
  );
};

export default Register;
