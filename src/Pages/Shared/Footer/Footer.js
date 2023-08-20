import React from "react";
import { Container, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const sectionStyle = {
    backgroundColor: "#C0C0C0",
    color: "#333",
    height: "200px",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    color: "#333",
    marginRight: "10px",
  };

  return (
    <footer>
      <div style={sectionStyle}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <h2>Section 1</h2>
              <p>This is the first section of the footer.</p>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ ...sectionStyle, justifyContent: "space-around" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <IconButton aria-label="facebook">
                <FacebookIcon style={iconStyle} />
              </IconButton>
              <IconButton aria-label="twitter">
                <TwitterIcon style={iconStyle} />
              </IconButton>
              <IconButton aria-label="linkedin">
                <LinkedInIcon style={iconStyle} />
              </IconButton>
              <IconButton aria-label="instagram">
                <InstagramIcon style={iconStyle} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
