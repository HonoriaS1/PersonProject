import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abarUnion'

export default withStyles({
  root: {
    background: '#09D47A1',
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
    <Link to='/content3'>
      <Button className={classes.buttonback} variant='raised'>
        Back to the South{'\''}s second response!
    </Button>
    </Link>
    <img className={classes.jamesiboi} src='https://i.imgur.com/0dOCXPe.jpg' alt='15' />
    <p className={classes.text}>
    The Fifteenth Amendment was used to abolish grandfather clauses, they prohibited the denial of suffrage because
    of ones {'\''}race, color, or previous conditon of servitude{'\''}, essentially making all grandfather clauses void.
    One aspect that has not been discussed here is that for the 13th, 14th, and 15th Amendments to the Constitution, there is a section
    at the end stating that {'\''}Congress shall have the power to enforce this article by appropriate legislation{'\''} or some phrase alike it.
    This was also used by Congress to suppliment these Amendments with additional federal laws.
    </p>
    <p />
    <Link to='/content5'>
      <Button className={classes.buttonnext} variant='raised'>
        To the South{'\''}s third response!
    </Button>
    </Link>

  </div>
))
