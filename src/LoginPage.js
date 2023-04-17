import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './global';


export function Login(){
  return(
    <div>
      <h1 className='cart-name'>Ecart...<sub>🕊️</sub></h1>
      
      <LoginPage />
    
    <div className='links'>
      <a href="/forget-password">forget password?</a> 
      <br/>
      <br/>
      <a href="/signup-page">Don't have an account?</a>
    </div>

    </div>  
  );
}


export function LoginPage() {
  
  const navigate = useNavigate();
  const [formState, setFormState] = useState("success");

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { username: "cartapp" , password: "app@12345"},
    onSubmit: async (values) => {
      console.log(values);

      const data = await fetch(`${API}/login/user`,{
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (data.status === 401){
        console.log("❌ Error");
        setFormState("error");
      } else {
        const result =  data.json();
        console.log("✅ Success", result);
        localStorage.setItem("token", result.token);
        navigate("/home-page");
      };
    },
  });
  
  return (
  <div>
    <h2 className='cart-name1'>Login here</h2>
    <form className='login-form' onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        onChange={handleChange}
        value={values.username}
        name='username'
        />
      <TextField
        label="Password"
        variant="outlined" 
        onChange={handleChange}
        value={values.password}
        name='password'
        />
      <Button className='login-button'
        type='submit'
        variant="outlined" color={formState} >
          { formState === 'error' ? 'Retry' : "Submit" }
        </Button>
    </form>
  </div>  
  );
}
