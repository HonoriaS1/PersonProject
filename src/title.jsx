import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, Paper, Grid } from "material-ui";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import Abar from "./abar";

export default withStyles({
  root: {
    background: "#673AB7",
    fontFamily: "Ubuntu",
    textAlign: "center",
  },
  button: {
    color: "#212121",
    background: "#81D4FA",
    width: '25%',
    fontSize: '150%',
    fontFamily: 'Ubuntu',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "175%",
    paddingTop: ".5%",
    color: "#F5F5F5",
  },
  padding: {
    marginTop: "0.5%",
  },
  textnopadding: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "300%",
  },
  jamesiboi: {
    width: '12.5%',
  },
    lbreak: {
    height: '2rem',
  },
  buttonlicense: {
    color: "#212121",
    background: "#81D4FA",
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
       <img className={classes.jamesiboi} src='https://i.imgur.com/wVGcsha.jpg' alt='James Mitchell Ashley' />
    <p className={classes.text}>
      The Thirteenth Amendment was the slavery ending amendment, passed after the Civil War
      it stopped slavery and involuntary servitude except as a punishment from the state for a crime. The man pictured here is James Mitchell Ashley (he was from Allegheny County), the person who created the 13th Amendment
      and an abolitionist who visited the hanging of John Brown.
    </p>
      <Link to='/content'>
      <Button className={classes.button} variant='raised'>
         The South{'\''}s Response
        </Button>
    </Link>
    <p className={classes.textnopadding}>
        <Link to='/licenses'>
        <Button className={classes.buttonlicense} variant='raised'>
        Licenses
        </Button>
        </Link>
      </p>
  </div>
));
