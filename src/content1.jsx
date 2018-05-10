import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abarConfederate'

export default withStyles({
  root: {
    background: '#212121',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
  lbreak: {
    height: '4rem',
  },
  buttonnext: {
    color: "#212121",
    display: 'block',
    background: "#81D4FA",
    width: '25%',
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
  },
  buttonback: {
    color: "#212121",
    display: 'block',
    background: "#81D4FA",
    width: '25%',
    fontSize: '150%',
    fontFamily: 'Ubuntu',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: 'auto%',
  },
  itiboi: {
    fontStyle: 'italic',
    color: "#F5F5F5",
  },

})(({ classes }) => (
  <div>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/'>
      <Button className={classes.buttonback} variant='raised'>
    Back to the Thirteenth Amendment
    </Button>
    </Link>
  <p />
    <Link to='/content2'>
      <Button className={classes.buttonnext} variant='raised'>
        To the Fourteenth Amendment
    </Button>
    </Link>

  </div>
))
