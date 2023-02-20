import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

const Form = () => {
  const [input, setInput] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          variant="outlined"
          placeholder="Name"
          sx={{ margin: 3 }}
          value={input.firstName}
          onChange={handleChange}
        />
        <TextField
          id="password"
          name="password"
          variant="standard"
          placeholder="password"
          sx={{ margin: 3 }}
          value={input.password}
          onChange={handleChange}
        />
        <TextField
          id="email"
          name="email"
          variant="filled"
          placeholder="Email"
          sx={{ margin: 3 }}
          value={input.email}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
