import React from "react";
import { Screens } from "./Screens";
import Navbar from "../Navbar";
import resume from '../../assets/files/Sid_Simhadri_Resume-new.pdf';
import { Box, Grid } from "@mui/material";

function Contact() {
  return (
    <div style={Screens}>
      <Navbar />
      <Grid justifyContent={'center'}>
      <Box fontSize={'50px'} justifySelf='center' >
      <a href={resume} download="Resume">
        Download
      </a>
      <Box>
      Email: simhadri.s@northeastern.edu
      </Box>
      <Box>
      Phone: (425)499-6989
      </Box>
      </Box>
      </Grid>
    </div>
  );
}

export default Contact;
