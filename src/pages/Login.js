// import React, {useState} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './login.css';
// import Validation from './Loginvalidation';
// import { Link } from "react-router-dom";

// function Login() {

//      const navigate = useNavigate();
//      const [errors, setErrors] = useState({
      
//     })
          
      
//     const [values, setValues] = useState({
//         email: "",
//         password: "",
//     });
      
//        const handleSubmit = (event) =>{
//           event.preventDefault();
//           const validationErrors = Validation(values);
//           setErrors(validationErrors);
//            // If there are no validation errors, proceed with login
//           if(!Object.values(validationErrors).some(error => error !=="")){
//             axios.post('http://localhost:8081/login', values)
//               .then(res =>{
//                 if(res.data === "Success"){
//                   const { user } = res.data;
//                    // Store user data in localStorage after successful login
//                    localStorage.setItem("user", JSON.stringify(user));

//                    // Navigate to the Profile page with user data
//                    navigate("/Profile", { state: { user } });
 

                  
                 
                 
//                 }
//                 else{
//                   alert("No record existed")
//                 }
      
//               })
//               .catch(err => console.log(err));
//           }
//        }
      
//      const handleInput =(event) => {
//         setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
//     }

      
//   return (
//     <div className='background-login'>
//     <div className='login-container'>
//     <div className='header-login'>Login</div>
//     <form action=""  onSubmit={handleSubmit}> 
   

//     <div className="box2">    
//         <label htmlFor="email" className="login-label">  
//           <strong>Email</strong>
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           onChange={handleInput}
          
         
//         />
//         {errors.email && (
//               <span className="text-alert"> {errors.email} </span>
//         )}
        
        
        
//     </div>

    
//     <div className="box2">    
//         <label htmlFor="password" className="login-label">  
//           <strong>password</strong>
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           onChange={handleInput}

          
         
//         />
//         {errors.password && (
//               <span className="text-alert"> {errors.password} </span>
//         )}
       
        
//     </div>

//     <div>
//     <button type='submit'  value="Login">Login</button>
        
//     </div>
//     <p className="link-to-login">already have a account ? login here </p>
//     <Link to ='/'><button   type="submit">Register</button> </Link>

  

//     </form>
//     </div>

//     </div>

// );
// };



// export default Login


// In your Login component
import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css';
import Validation from './Loginvalidation';
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
      
     })

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    
    axios.post('http://localhost:8081/login', values)
      .then((res) => {
        if (res.data === 'Success') {
          // Store user data in localStorage after successful login
          localStorage.setItem('user', JSON.stringify(values));

          // Navigate to the Profile page with user data as state
          navigate('/Profile', { state: { user: values } });
        } else {
          alert('No record existed');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    
        
        <div className='background-login'>
        <div className='login-container'>
        <div className='header-login'>Login</div>
        <form action=""  onSubmit={handleSubmit}> 
   

     <div className="box2">    
         <label htmlFor="email" className="login-label">  
           <strong>Email</strong>
        </label>
       <input
          type="email"
          id="email"
          name="email"
          onChange={handleInput}
          
         
        />
        {errors.email && (
              <span className="text-alert"> {errors.email} </span>
        )}
        
        
        
    </div>

    
    <div className="box2">    
        <label htmlFor="password" className="login-label">  
          <strong>password</strong>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInput}

          
         
        />
        {errors.password && (
              <span className="text-alert"> {errors.password} </span>
        )}
       
        
    </div>
          <div className="button-login">
                <button type='submit'>Login</button>
          </div>
          <p className="link-to-login">don't  have a account ? Register here </p>
          <div className="button-register">
          
          <Link to ='/'><button   type="submit">Register</button> </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;



