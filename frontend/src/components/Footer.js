import { Typography } from "@mui/material";
import React from "react";

const styles = {
  footer: {
    backgroundColor: "#317AC1",
    padding: "16px",
    marginTop: "20px",
    textAlign: "center",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ color: "white" }}
      >
        Technical Test
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ color: "white" }}
      >
        Done by Achraf Ameur
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ color: "white" }}
      >
        &copy; {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
