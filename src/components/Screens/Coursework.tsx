import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

import { Screens } from "./Screens";

function Coursework() {
  return (
    <div style={Screens}>
      <Navbar />
      <Grid container spacing={0} justifyContent={"center"}>
        <Grid paddingLeft={"10px"} textAlign={"center"}>
          <Box>
            <Box
              padding={"10px"}
              style={{
                fontSize: "30px",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              {" "}
              Skills
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Python
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Java
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Javascript / TypeScript
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              React
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Jira Issue Tracking
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              SQL
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Github
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Agile Workflow
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              MacOS
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              WindowsOS
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              LinuxOS
            </Box>
          </Box>
        </Grid>
        <Grid textAlign={"center"}>
          <Box>
            <Box
              padding={"10px"}
              style={{
                fontSize: "30px",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              {" "}
              CourseWork
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Object Oriented Design
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Software Development
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Algorithms and Data Structures
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Database Design
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Computer Systems
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Networks And Distributed Systems
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Cybersecurity
            </Box>
            <Box padding={"10px"} fontSize={"20px"}>
              Theory of Computation
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Coursework;
