// import React, {useState} from "react";
// import './register.css';
// import { useNavigate } from 'react-router-dom';
// import Validation from './Registervalidation';
// import axios from "axios";
// import { Link } from "react-router-dom";





// function Register() {
//   const navigate = useNavigate();
  
//   const [values ,setValues] = useState({
//         username:"",
//         email: "",
//         password:"",

//     })

//     const [errors, setErrors] = useState({

//     })
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const validationErrors = Validation(values);
//         setErrors(validationErrors);

//     if (!Object.values(validationErrors).some((error) => error !== "")) {
//         axios
//           .post("http://localhost:8081/register", values)
//           .then((res) => {
//             navigate("/Login");
           
//             console.log("successful"); //successful registration response
//           })
//           .catch((err) => {
//             console.error("Registration failed:", err);
//             // Handle registration errors 
//           });
//       }
//     };


//     const handleInput =(event) => {
//         setValues(prev => ({...prev,[event.target.name]: event.target.value}))
//       }

 
// return (
 
//         <div className='background1'>
//         <div className='register-container'>
//         <div className='header-register'> Register</div>
//         <form action="" onSubmit= {handleSubmit} > 
//         <div className="box1">    
//             <label htmlFor="username" >  
//               <strong>Username</strong>
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={values.username}
//               onChange={handleInput}
//             />
//             {errors.username && (
//               <span className="text-alert"> {errors.username} </span>
//             )}
            
            
//         </div>

//         <div className="box1">    
//             <label htmlFor="email" >  
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={values.email}
//               onChange={handleInput}
              
             
//             />
//              {errors.email && (
//               <span className="text-alert"> {errors.email} </span>
//             )}
            
//         </div>

        
//         <div className="box1">    
//             <label htmlFor="password" className="register-label">  
//               <strong>password</strong>
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder=" @password need uppercase letter and numbers "
//               value={values.password}
//               onChange={handleInput}
             
//             />
//              {errors.password && (
//               <span className="text-alert"> {errors.password} </span>
//             )}
            
//         </div>

//         <div >
//         <button type='submit'  value="Register"> Register</button>
            
//         </div>
        
       
        
//           <p className="link-to-register">already have a account ? login here </p>
//           <Link to ='./Login'><button   type="submit">Login</button> </Link>
       
       

      

//         </form>
//         </div>

//         </div>
   
//   );
// };

// export default Register;


// import React, {useState} from "react";
// import './register.css';
// import { useNavigate } from 'react-router-dom';
// import Validation from './Registervalidation';
// import axios from "axios";
// import { Link } from "react-router-dom";





// function Register() {
//   const navigate = useNavigate();
  
//   const [values ,setValues] = useState({
//         username:"",
//         email: "",
//         password:"",

//     })

//     const [errors, setErrors] = useState({

//     })
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const validationErrors = Validation(values);
//         setErrors(validationErrors);

//     if (!Object.values(validationErrors).some((error) => error !== "")) {
//         axios
//           .post("http://localhost:8081/register", values)
//           .then((res) => {
//             navigate("/Login");
           
//             console.log("successful"); //successful registration response
//           })
//           .catch((err) => {
//             console.error("Registration failed:", err);
//             // Handle registration errors 
//           });
//       }
//     };


//     const handleInput =(event) => {
//         setValues(prev => ({...prev,[event.target.name]: event.target.value}))
//       }

 
// return (
 
//         <div className='background1'>
//         <div className='register-container'>
//         <div className='header-register'> Register</div>
//         <form action="" onSubmit= {handleSubmit} > 
//         <div className="box1">    
//             <label htmlFor="username" >  
//               <strong>Username</strong>
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={values.username}
//               onChange={handleInput}
//             />
//             {errors.username && (
//               <span className="text-alert"> {errors.username} </span>
//             )}
            
            
//         </div>

//         <div className="box1">    
//             <label htmlFor="email" >  
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={values.email}
//               onChange={handleInput}
              
             
//             />
//              {errors.email && (
//               <span className="text-alert"> {errors.email} </span>
//             )}
            
//         </div>

        
//         <div className="box1">    
//             <label htmlFor="password" className="register-label">  
//               <strong>password</strong>
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="password must less than 8 with uppercase letter and numbers "
//               value={values.password}
//               onChange={handleInput}
             
//             />
//              {errors.password && (
//               <span className="text-alert"> {errors.password} </span>
//             )}
            
//         </div>

//         <div >
//         <button type='submit'  value="Register"> Register</button>
            
//         </div>
        
       
        
//           <p className="link-to-register">already have a account ? login here </p>
//           <Link to ='./Login'><button   type="submit">Login</button> </Link>
       
       

      

//         </form>
//         </div>

//         </div>
   
//   );
// };

// export default Register;









import React, {useState} from "react";
import './register.css';
import { useNavigate } from 'react-router-dom';
import Validation from './Registervalidation';
import axios from "axios";
import { Link } from "react-router-dom";





function Register() {
  const navigate = useNavigate();
  
  const [values ,setValues] = useState({
        username:"",
        email: "",
        password:"",

    })

    const [errors, setErrors] = useState({

    })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

    if (!Object.values(validationErrors).some((error) => error !== "")) {
        axios
          .post("http://localhost:8081/register", values)
          .then((res) => {
            navigate("/Login");
           
            console.log("successful"); //successful registration response
          })
          .catch((err) => {
            console.error("Registration failed:", err);
            // Handle registration errors 
          });
      }
    };


    const handleInput =(event) => {
        setValues(prev => ({...prev,[event.target.name]: event.target.value}))
      }

 
return (
 
        <div className='background1'>
        <div className='register-container'>
        <div className='header-register'> Register</div>
        <form action="" onSubmit= {handleSubmit} > 
        <div className="box1">    
            <label htmlFor="username" >  
              <strong>Username</strong>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleInput}
            />
            {errors.username && (
              <span className="text-alert"> {errors.username} </span>
            )}
            
            
        </div>

        <div className="box1">    
            <label htmlFor="email" >  
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleInput}
              
             
            />
             {errors.email && (
              <span className="text-alert"> {errors.email} </span>
            )}
            
        </div>

        
        <div className="box1">    
            <label htmlFor="password" className="register-label">  
              <strong>password</strong>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password must less than 8 with uppercase letter and numbers "
              value={values.password}
              onChange={handleInput}
             
            />
             {errors.password && (
              <span className="text-alert"> {errors.password} </span>
            )}
            
        </div>

        <div >
        <button type='submit'  value="Register"> Register</button>
            
        </div>
        
       
        
          <p className="link-to-register">already have a account ? login here </p>
          <Link to ='./Login'><button   type="submit">Login</button> </Link>
       
       

      

        </form>
        </div>

        </div>
   
  );
};

export default Register;











































