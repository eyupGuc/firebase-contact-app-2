import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {
  Grid,
  Box,
  Container,
  Stack,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";

const FormComponent = ({ info, setInfo,handleSubmit,isAdd }) => {
  
  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const{name,value}=e.target;
    setInfo({...info,[name]:value})
    // console.log(info)
  };

  return (
 
      <Grid
        textAlign="center"
        // verticalAlign="middle"
    
        direction="column"
        style={{ width: "300"  }}
      >
        <div className="contact-header">
          <div>
            <a href="https://github.com/eyupGuc" target="_blank" className="design" rel="noopener noreferrer">
              <code>{"<eGuc/>"}</code>
            </a>
          </div>
          <span className="design header">design</span>
        </div>

        <h2 className="contact-header">Add Contact</h2>
        <Box style={{ backgroundColor: "White", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} direction="column">
              <TextField
                variant="outlined"
                name="username"
                value={info.username}
                onChange={handleChange}
                placeholder="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                name="phoneNumber"
                value={info.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneEnabledIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  variant="outlined"
                  value={info?.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" type="submit" value="Submit">
                {isAdd}
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>

  );
};

export default FormComponent;
