import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <div>
      <Container id="home-container">
        <Container>
          <img id="img1" src="./images/nike1.png" />
          <img id="img2" src="./images/nike2.png" />
          <Typography variant="h1" className="header1">
            New <span> Collection</span>
          </Typography>
          {/* <img id="img3" src="./images/nike3.png" /> */}
        </Container>
      </Container>
    </div>
  );
};

export default Home;
