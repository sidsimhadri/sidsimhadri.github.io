import React from "react";
import { Screens } from "./Screens";
import Navbar from "../Navbar";
import resume from "../../assets/files/Sid_Simhadri_Resume-new.pdf";
import { Box, Grid } from "@mui/material";

function Contact() {
  return (
    <div style={Screens}>
      <Navbar />
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        textAlign={'center'}
      >
        <Box fontSize={"50px"} padding={'50px'}>
          <a href={resume} download="Resume">
            Download
          </a>
          <Box padding={'50px'}>Email: simhadri.s@northeastern.edu</Box>
          <Box padding={'50px'}>Phone: (425)499-6989</Box>
        </Box>
      </Grid>
    </div>
  );
}

export default Contact;
