import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { API } from './global';


const formValidationSchema = yup.object({
  username: yup.string().min(8).required()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup.string().min(4).required(),
});


export function SignupPage() {

const navigate = useNavigate();
 

  const { handleChange, values, handleSubmit, handleBlur, touched, errors } = useFormik({
    initialValues: { username: "" , password: ""},

    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      console.log("form values:", values);

      const data = await fetch(`${API}/signup/user`,{
        method: "POST",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify(values),
      });
      
        const result = await data.json();
        console.log("✅ Success", result);
        navigate("/");
    
    },
  });
  
  return (
  <div>
    <h2 className='cart-name1'>Signup here</h2>
    <form className='login-form' onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        onChange={handleChange}
        value={values.username}
        name='username'
        onBlur={handleBlur}
        />
        {touched.username && errors.username ? errors.username : null}
      <TextField
        label="Password"
        variant="outlined" 
        onChange={handleChange}
        value={values.password}
        name='password'
        onBlur={handleBlur}
        />
        {touched.password && errors.password ? errors.password : null}

      <Button className='login-button'
        type='submit'
        variant="outlined">
        Submit
      </Button>

    </form>
  </div>  
  );
}
