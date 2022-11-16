import { AccountCircle } from "@mui/icons-material";
import {
  Grid,
  Box,
  Container,
  Stack,
  TextField,
  InputAdornment,
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
            <a
              href="#"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              ></TextField>
            </Stack>
          </form>
        </Box>
      </Grid>
    </Container>
  );
};

export default FormComponent;
