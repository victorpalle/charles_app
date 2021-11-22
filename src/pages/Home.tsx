import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    background:
      "linear-gradient(45deg, rgb(255, 255, 179, 1), rgb(255, 255, 179, 0.6))",
    height: "100vh",
    position: "relative",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    fontSize: "10vw",
    margin: "auto",
  },
});

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <div className={classes.text}>Starting soon ...</div>
      </div>
    </div>
  );
};
