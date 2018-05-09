import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, Paper } from "material-ui";
import AppBar from "material-ui/AppBar";

export default withStyles({
  tnav: {
    color: "#E0E0E0",
    background: "#7E57C2",
    height: "3.15rem",
    bottom: 0,
    fontSize: '2.8rem',
  }
})(({ classes }) => (
  <div>
    <AppBar className={classes.tnav}>
    <Link to='/'>
      <div>The Reconstruction Amendments</div>
    </Link>
    </AppBar>
  </div>
));
