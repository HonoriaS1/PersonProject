import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abar'

export default withStyles({
  root: {
    background: '#212121',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
  lbreak: {
    height: '4rem',
  },
  button: {
    color: "#212121",
    background: "#00BCD4",
    width: '10rem',
    fontSize: '1rem',
    fontFamily: 'Ubuntu',
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
  smolesttext: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: ".9rem",
    color: "#F5F5F5",
  },
  button2: {
    color: "#212121",
    background: "#00BCD4",
    width: '10rem',
    fontSize: '1rem',
    fontFamily: 'Ubuntu',
  },
  itiboi: {
    fontStyle: 'italic',
    color: "#F5F5F5",
  },
  line2: {
    borderColor: '#01579B',
  },
  line3: {
    borderColor: '#18FFFF',
  },
  line4: {
    borderColor: '#00897B',
  },
  bold: {
    fontFamily: 'Ubuntu:700',
  },
})(({ classes }) => (
  <div>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/'>
      <Button className={classes.button} variant='raised'>
    Back to the Thirteenth Amendment
    </Button>
    </Link>
  <p />
    <Link to='/content2'>
      <Button className={classes.button2} variant='raised'>
        To the Fourteenth Amendment
    </Button>
    </Link>

  </div>
))
