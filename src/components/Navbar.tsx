import React from "react";
import { createUseStyles } from "react-jss";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    justifyContent: "center",
    height: "30%",
  },
});

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      style={{
        background:
          "linear-gradient(45deg, rgb(255, 255, 179, 1), rgb(255, 255, 179, 0.6))",
        boxShadow: "none",
      }}
    >
      <Toolbar className={classes.navbar}>
        <Typography variant="h6" style={{ flexGrow: 1, color: "black" }}>
          Galarte
        </Typography>
        <Button style={{ color: "black" }}>Log in</Button>
        <Button style={{ color: "black" }}>Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};
