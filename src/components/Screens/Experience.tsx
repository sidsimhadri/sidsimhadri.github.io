import React from "react";
import { Screens } from "./Screens";
import Navbar from "../Navbar";
import { Grid, Box } from "@mui/material"; // Grid version 1

function Experience() {
  return (
    <div style={Screens}>
      <Navbar />
      <div style={{ position: "absolute", top: "100px", left: "30px" }}>
        <Box style={{ fontSize: "35px" }}>
          Backend Developer Co-op -- Tyler Technologies -- 08-12/2022
        </Box>
        <Box paddingLeft={"30px"} fontSize={"25px"}>
          <Box paddingTop={"10px"}>
            {" "}
            • Built backend for multiple large scale enterprise apps that will
            be published for customers in early 2023{" "}
          </Box>
          <Box paddingTop={"10px"}>
            • Wrote advanced SQL queries involving large joins, merges,
            subqueries, and user defined functions{" "}
          </Box>
          <Box paddingTop={"10px"}>
            • Created APIs to integrate the backend services with Angular
            frontend, modified frontend on request from testers, and tested
            functionality using Postman
          </Box>
        </Box>
        <Box paddingTop={"30px"} style={{ fontSize: "35px" }}>
          Full Stack Developer Co-op -- Jellyfish -- 08-12/2021
        </Box>
        <Box paddingLeft={"30px"} fontSize={"25px"}>
          <Box paddingTop={"10px"}>
            {" "}
            • Worked within a full stack team to respond to customer feedback
            and squash app performance and infra bugs (primarily in SQL and
            Python with some React.js)
          </Box>
          <Box paddingTop={"10px"}>
            • Built an interactive slack bot API to reserve staging environments
            using slash commands in slack chat
          </Box>
          <Box paddingTop={"10px"}>
            • Prepared company database for sharding by writing SQL scripts and
            generating migrations
          </Box>
        </Box>
        <Box paddingTop={"30px"} style={{ fontSize: "35px" }}>
          Data Analyst Intern -- Deepscribe AI -- 07-09/2020
        </Box>
        <Box paddingTop={"10px"} paddingLeft={"30px"} fontSize={"25px"}>
          <Box>
            {" "}
            • Used SQL and Python to process data, improve data quality by
            scrubbing outliers and generate charts that analyze product usage
            and customer growth trends
          </Box>
          <Box paddingTop={"10px"}>
            • Wrote a technical requirements document and presented to the CFO
            and CEO
          </Box>
          <Box paddingTop={"10px"}>
            • Wrote python scripts that could be ran on a schedule to enforce
            data quality automatically
          </Box>
        </Box>
        Ï
      </div>
    </div>
  );
}

export default Experience;
