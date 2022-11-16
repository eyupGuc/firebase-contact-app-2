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

const FormComponent = () => {
  return (
    <Container maxWidth="xs">
      <Grid
        textAlign="center"
        verticalAlign="middle"
        direction="column"
        style={{ width: "300" }}
      >
        <p className="contact-header">
          <div>
            <a href="#" className="design" rel="noopener noreferrer">
              <code>{"<eGuc/>"}</code>
            </a>
          </div>
          <span className="design header">design</span>
        </p>

        <h2 className="contact-header">Add Contact</h2>
        <Box style={{ backgroundColor: "White", padding: "20px" }}>
          <form>
            <Stack spacing={3} direction="column">
              <TextField
                variant="outlined"
                name="username"
                value={null}
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
                value={null}
                placeholder="Phone Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneEnabledIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl variant="standart" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  variant="outlined"
                  value={null}
                  onChange={null}
                >
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" type="submit" value="Submit">
                ADD
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </Container>
  );
};

export default FormComponent;
