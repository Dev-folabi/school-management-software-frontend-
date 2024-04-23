import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import loginAuth from "../../api/auth/loginAuth";
import CustomAlert from "../toast/alert";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 5) {
      errors.password = "Password must be at least 6 characters";
    }
    if (Object.keys(errors).length === 0) {
      // No errors, submit the form
  
      try {
         setLogin(true);
       const input = { email, password };

       const {success, data, error} = await loginAuth(input);

       if(success){
        console.log(data)
        setFeedback({type: 'success', message: "Logged In"})
       }else{
        console.log(data, error)
        setFeedback({ type: "error", message: `Login failed ${data}` });
       }
      } catch (error) {
        console.error("Login failed:", error.message);
         setFeedback({
           type: "error",
           message: "Login failed. Please try again.",
         });
      } finally {
        setLogin(false);
      }
    } else {
      // Update the state with errors
      setErrors(errors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">

{/*  alert  */}
{feedback && (<CustomAlert severity={feedback.type} onClose={()=>(setFeedback(null))}>
  {feedback.message}
  </CustomAlert>)}

      <div className="mb-8">
        <h2 className="text-4xl font-bold text-black-400 text-center pb-2">
          Sign In as an administrator
        </h2>
        <h3 className="text-sm text-black-400 text-center">
          Enter your details to sign in to your account
        </h3>
      </div>

      <form className="flex flex-col space-y-4 w-96" onSubmit={handleLogin}>
        <TextField
          required
          id="outlined-email"
          fullWidth={true}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          helperText={errors.email}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-password-input"
          fullWidth={true}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          helperText={errors.password}
          autoComplete="current-password"
          variant="outlined"
        />

        <Button type="submit" variant="contained">
          {login ? "LOGIN IN ..." : "LOGIN"}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
