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
    <Link to='/content'>
      <Button className={classes.buttonback} variant='raised'>
        Back to the South{'\''}s first response!
    </Button>
    </Link>
    <img className={classes.jamesiboi} src='https://i.imgur.com/WDyH2fu.jpg' alt='14' />
    <p className={classes.text}>
    The Fourteenth Amendment fixed some of the racist issues that were plaging part of the Union, particularly the loop holes that were discussed prior.
    This Amentment to the Constitution made the law equal for all citizens, made all American born people citizens (except Native Americans)
    the ability for all males above 21 to vote, and made some other less important changes. (see the actual Amendment from the home page to learn about these)
    </p>
    <p />
    <Link to='/content3'>
      <Button className={classes.buttonnext} variant='raised'>
        To the South{'\''}s second response!
    </Button>
    </Link>

  </div>
))
