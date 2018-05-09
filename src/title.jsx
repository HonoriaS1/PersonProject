import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, Paper } from "material-ui";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import Abar from "./abar";

export default withStyles({
  root: {
    background: "#673AB7",
    fontFamily: "Ubuntu",
    textAlign: "center",
    overflow: "auto",
  },
  button: {
    color: "#212121",
    background: "#D32F2F",
    width: '15rem',
    fontSize: '1.5rem',
    fontFamily: 'Ubuntu',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "2rem",
    paddingTop: ".5rem",
    color: "#F5F5F5",
  },
  padding: {
    marginTop: "3rem",
  },
  textnopadding: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "18px",
  },
  guidosmol: {
    height: '20rem',
    width: '30rem',
  },
  citetext: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "0.9rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    color: "#F5F5F5",
    textDecoration: "underline",
  },
    lbreak: {
    height: '4rem',
  },
  buttonlicense: {
    color: "#212121",
    background: "#D32F2F",
    width: '3rem',
    fontSize: '.6rem',
    fontFamily: 'Ubuntu',
  },

})(({ classes }) => (
  <div className={classes.root} >
    <Abar />
    <br />
    <p className={classes.lbreak}>​​​​​</p>
    <div className={classes.padding} />
    <Link to='/content'><Button className={classes.button}>
      A bit about Guido!
    </Button>
    </Link>
    <p className={classes.text}>
      The Thirteenth Amendment was the main slavery ending amendment, passed after the Civil War
      it stopped slavery and involuntary servitude except as a punishment from the state for a crime.
    </p>
    <p className={classes.textnopadding}>
     <Link to='/licenses'>
      <Button className={classes.buttonlicense}>
      Licenses
      </Button>
       </Link>
    </p>
  </div>
));
