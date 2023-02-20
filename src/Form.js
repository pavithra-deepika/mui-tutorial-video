import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

const Form = () => {
  const [input, setInput] = useState({
    firstName: "",
    email: "",
    password: "",
    subscribe: false,
    age: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const handleAgeChange = (e) => {
    e.preventDefault();
    setInput({ ...input, age: e.target.value });
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={input.age}
              label="Age"
              onChange={handleAgeChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInput((e) => ({ ...input, subscribe: !input.subscribe }))
                }
              />
            }
            label="subscribe"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
