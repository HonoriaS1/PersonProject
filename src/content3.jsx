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
    <Link to='/content2'>
      <Button className={classes.buttonback} variant='raised'>
        Back to the Fourteenth Amendment
    </Button>
    </Link>
    <p className={classes.text}>
    Like with the Thirteenth Amendment, the Southern States were eager and ready to use even more loop holes to disenfranchise African Americans.
    This time they used illegal violence, poll taxes, literacy tests, and grandfather clauses to stop them from voting. Poll taxes and literacy tests were frequently used because many recently freed
    slaves were poor and illiterate. Grandfather clauses were the most sneaky of these; laws about voters grandfathers eligibility or the dates at which one could vote were used because they specifically
    singled out African Americans.
    </p>
    <p />
    <Link to='/content4'>
      <Button className={classes.buttonnext} variant='raised'>
        To the Fifteenth Amendment
    </Button>
    </Link>

  </div>
))
