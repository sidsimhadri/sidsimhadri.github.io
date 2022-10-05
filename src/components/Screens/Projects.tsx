import React from "react";
import { Screens, Box as b } from "./Screens";
import Navbar from "../Navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Grid, Box } from "@mui/material"; // Grid version 1

function Projects() {
  return (
    <div style={Screens}>
      <Navbar />{" "}
      <Grid container spacing={0}>
        <Popup
          trigger={
            <Grid xs={4} padding={"40px"}>
              <Box sx={b}>MVC Animator</Box>
            </Grid>
          }
        >
          <Box color="black" border={1}>
            <Box>
              • Built a full stack fitness app in React using axios and MYSQL to
              store user data
            </Box>
            <Box>
              • Users can create accounts, create workout plans, track and use
              the plans, and view charts generated from their workout
              performance
            </Box>
          </Box>
        </Popup>
        <Popup
          trigger={
            <Grid xs={4} padding={"40px"}>
              <Box sx={b}>Lion Fitness App</Box>
            </Grid>
          }
        >
          <Box color="black" border={1}>
            <Box>
              • Used MVC design pattern to design an animator to convert textual
              inputs into the user's choice of either SVG or Java Swing
              animation.
            </Box>
            <Box>
              • The editable Swing animation enabled users to play, pause, fast
              forward, and restart the animation, and decide if it should loop
              when completed
            </Box>
          </Box>
        </Popup>
        <Popup
          trigger={
            <Grid xs={4} padding={"40px"}>
              <Box sx={b}>Key Value Store</Box>
            </Grid>
          }
        >
          <Box color="black" border={1}>
            <Box>
              • Built a distributed, replicated key-value datastore that
              supported get and put requests.
            </Box>
            <Box>
              • Implemented a simplified version of the Raft protocol to
              maintain consensus between the replicas.
            </Box>
          </Box>
        </Popup>
        <Popup
          trigger={
            <Grid xs={4} padding={"40px"}>
              <Box sx={b}>Web Crawler</Box>
            </Grid>
          }
        >
          <Box color="black" border={1}>
            • Built a web crawler in python to parse multiple websites, navigte
            through links to nested pages, and keep track of progress to not end
            in loops
          </Box>
        </Popup>
        <Popup
          trigger={
            <Grid xs={8} padding={"40px"}>
              <Box sx={b}>Algorithmic Trading Bot (In Progress)</Box>
            </Grid>
          }
        >
          <Box color="black" border={1}>
            • Will use TradingView API to chart supply and demand zones on
            trading charts and send alerts (or potentially integrate directly
            with Robinhood API) for options calls and puts.
          </Box>
        </Popup>
      </Grid>
      <Box bottom={"0"} position={"fixed"} padding={"100px"}>
        {" "}
        Click for now, but soon you'll be able to play spaceinvaders and destroy
        a link to navigate to its details!
      </Box>
    </div>
  );
}

export default Projects;
