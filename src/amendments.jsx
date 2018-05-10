import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abarUnion'

export default withStyles({
  root: {
    background: '#212121',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
  lbreak: {
    height: '15%',
  },
  button: {
    color: "#212121",
    background: "#81D4FA",
    width: '25%',
    fontFamily: 'Ubuntu',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    paddingTop: "5%",
    color: "#F5F5F5",
  },
  button2: {
    color: "#212121",
    background: "#00BCD4",
    width: '10rem',
    fontSize: '1rem',
    fontFamily: 'Ubuntu',
  },
})(({ classes }) => (
  <div>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <p className={classes.lbreak}>​​ </p>
    <p className={classes.lbreak}>​​ </p>
    <Link to='/'>
      <Button className={classes.button}>
        Back to the Home Page
    </Button>
    </Link>
  <p className={classes.text}> <br /> <br />
    Amendment 13:
    <br /><br />
    Section 1.<br /><br />
Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.
<br />
<br />
Section 2.<br /><br />
Congress shall have power to enforce this article by appropriate legislation.
<br />
<br /><br />
Amendment 14:
      <br /><br />
Section 1.
All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.
      <br /><br />
Section 2.
Representatives shall be apportioned among the several States according to their respective numbers, counting the whole number of persons in each State, excluding Indians not taxed. But when the right to vote at any election for the choice of electors for President and Vice-President of the United States, Representatives in Congress, the Executive and Judicial officers of a State, or the members of the Legislature thereof, is denied to any of the male inhabitants of such State, being twenty-one years of age, and citizens of the United States, or in any way abridged, except for participation in rebellion, or other crime, the basis of representation therein shall be reduced in the proportion which the number of such male citizens shall bear to the whole number of male citizens twenty-one years of age in such State.
      <br /><br />
Section 3.
No person shall be a Senator or Representative in Congress, or elector of President and Vice-President, or hold any office, civil or military, under the United States, or under any State, who, having previously taken an oath, as a member of Congress, or as an officer of the United States, or as a member of any State legislature, or as an executive or judicial officer of any State, to support the Constitution of the United States, shall have engaged in insurrection or rebellion against the same, or given aid or comfort to the enemies thereof. But Congress may by a vote of two-thirds of each House, remove such disability.
      <br /><br />
Section 4.
The validity of the public debt of the United States, authorized by law, including debts incurred for payment of pensions and bounties for services in suppressing insurrection or rebellion, shall not be questioned. But neither the United States nor any State shall assume or pay any debt or obligation incurred in aid of insurrection or rebellion against the United States, or any claim for the loss or emancipation of any slave; but all such debts, obligations and claims shall be held illegal and void.
      <br /><br />
Section 5.
The Congress shall have the power to enforce, by appropriate legislation, the provisions of this article.
      <br /><br /><br />
Amendment 15:
      <br /><br />
Section 1.
      <br /><br />
The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude--
      <br /><br />
Section 2.
      <br /><br />
The Congress shall have the power to enforce this article by appropriate legislation.
  </p>
  </div>
))