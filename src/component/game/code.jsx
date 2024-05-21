import React, { useState } from "react";
import {Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Code = () => {
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState("");
  const [join, setJoin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors("");
    if (!code.trim() || code.trim().length !== 6) {
      setErrors("Please input a valid 6-digit code.");
    } else {
      console.log(code);
      setJoin(true);
      setTimeout(() => {
        setJoin(false);
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="mt-16 mb-8">
          <h2 className="text-4xl font-bold text-black text-center pb-2">
            Enter Game Code
          </h2>
          <h3 className="text-sm text-black text-center">
            Enter game code to participate
          </h3>
        </div>

        <form
          className=" flex flex-col  bg-white shadow-md rounded px-8 pt-6 pb-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <TextField
              id="outlined-basic"
              label="Game Code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              error={!!errors}
              helperText={errors || ""}
              variant="outlined"
              fullWidth
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            disabled={join}
            fullWidth
            className="mt-4 mb-8 bg-t-blue"
          >
            {join ? "Joining..." : "Join"}
          </Button>

           <Link to="/signup" className="text-center text-t-blue mt-8">
        Become an admin
      </Link>
        </form>
       
      </div>
    </div>
  );
};

export default Code;
