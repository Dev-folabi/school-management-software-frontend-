import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import signUpAuth from "../../api/auth/signupAuth";
import CustomAlert from "../toast/alert";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validation logic
    const newErrors = {};
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      // Update the state with new errors
      setErrors(newErrors);
      return;
    }

    // signUp Auth Api
    try {
      setRegistering(true);

      const input = { firstName, lastName, email, password };
      const { success, data } = await signUpAuth(input);

      if (success) {
        // reset form fields upon successful registration
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setFeedback({ type: "success", message: "Registration successful!" });
        console.log(data);
        localStorage.setItem("token", data);
       
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        console.log(data);
        setFeedback({ type: "error", message: `Registration failed: ${data}` });
      }
    } catch (error) {
      console.log(error.message);
      setFeedback({
        type: "error",
        message: "Registration error. Please try again.",
      });
    } finally {
      setRegistering(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Alert */}
      {feedback && (
        <CustomAlert severity={feedback.type} onClose={() => setFeedback(null)}>
          {feedback.message}
        </CustomAlert>
      )}

      <div className="mb-8">
        <h2 className="text-4xl font-bold text-black-400 text-center pb-2">
          Sign up as an administrator
        </h2>
        <h3 className="text-sm text-black-400 text-center">
          Enter your details to become an administrator
        </h3>
      </div>

      <form className="flex flex-col space-y-4 mb-6" onSubmit={handleRegister}>
        <div className="flex space-x-4">
          <TextField
            required
            id="outlined-firstName"
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName || ""}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-lastName"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName || ""}
            variant="outlined"
          />
        </div>
        <TextField
          required
          id="outlined-email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email || ""}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password || ""}
          autoComplete="new-password"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-confirm-password-input"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword || ""}
          autoComplete="new-password"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          disabled={registering}
          className="bg-t-blue"
        >
          {registering ? "REGISTERING..." : "SIGN UP"}
        </Button>
      </form>

      {/* Link to Sign In */}
      <Link to="/login" className="text-black-400">
        Have an account? <span className="text-t-blue">Sign In</span>
      </Link>
    </div>
  );
};

export default SignUpForm;
