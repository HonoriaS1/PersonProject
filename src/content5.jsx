import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abarConfederate'

export default withStyles({
  root: {
    background: '#616161',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    height: "100vh",
    width: "100vw",
  },
  lbreak: {
    height: '4rem',
  },
  buttonnext: {
    color: "#212121",
    display: 'block',
    background: "#E0E0E0",
    height: '5%',
    fontSize: '150%',
    fontFamily: 'Ubuntu',
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: '2%',
  },
  pythonimage: {
    width: '10rem',
    height: '10rem',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    color: "#F5F5F5",
    fontSize: '150%',
  },
  buttonback: {
    color: "#212121",
    display: 'block',
    background: "#E0E0E0",
    height: '5%',
    fontSize: '150%',
    fontFamily: 'Ubuntu',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: 'auto',
  },
  itiboi: {
    fontStyle: 'italic',
    color: "#F5F5F5",
  },
  jamesiboi: {
    paddingTop: '5%',
    width: '25%',
  },
})(({ classes }) => (
  <div className={classes.root}>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/content4'>
      <Button className={classes.buttonback} variant='raised'>
        Back to the Fifteenth Amendment
    </Button>
    </Link>
    <p className={classes.text}>
      The South{'\''}s final response was with Jim Crow laws (named after a rascist song) to instate segregation.
      Jim Crow laws were created in the South after the American Civil War and unlike some of these other laws in the South, Jim Crow laws were not short lived.
      They lasted until 1965 when they were finally considered unconstitutional. Many suits in the Supreme Court of the United States were brought up because of these segregational laws, but for around one hundred years they were considered unconstitutional.
    </p>
    <p />

  </div>
))
