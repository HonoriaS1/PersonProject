import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Button, Paper} from 'material-ui'

export default withStyles({
  root: {
    background: '#212121',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
  paper: {
    paddingTop: '2.0rem',
    background: '#37474F',
    marginRight: '5.0vw',
    marginLeft: '5.0vw',
    lineHeight: '3.0rem',
    fontSize: '2.25rem',
    paddingBottom: '0.5rem',
  },
})(({ classes }) => (
  <div>
  <Paper className='paper'>
    <p>
        yes boi
    </p>
    <Button href='/content'>
      yesssss
    </Button>
    </Paper>
  </div>
))