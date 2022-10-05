import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

import { Screens } from "./Screens";

function About() {
  return (
    <div style={Screens}>
      <Navbar />
        <Box
          sx={{
            border: 1,
          }}
          alignSelf={'center'}
          justifySelf={'center'}
          fontSize={"30px"}
          textAlign={"center"}
          width={'60%'}
        >
          Hi! I'm Sid Simhadri and I'm currently a 4th year at Northeastern
          University. I've got lots of experience with development and testing
          from my 4 years of project based learning and 1 year of industry
          experience. Lately i've been enjoying working with APIs to build
          larger scale projects that can interact with processes and data
          outside of themselves. This website is one of my first attempts at web
          development from scratch using react so its still a work in progress
          and I have a lot of cool features planned! Outside of work and school,
          I enjoy working out and doing anything outdoors, Jiu Jitsu and other
          combat sports, and I'm a massive soccer fan. You can download my
          resume on the contact page!
        </Box>
    </div>
  );
}

export default About;
