import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const FormComponent = () => {
  return (
    <Container maxWidth="md">
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
        <Box style={{ backgroundColor: "White", padding: "20px" }}></Box>
      </Grid>
    </Container>
  );
};

export default FormComponent;
