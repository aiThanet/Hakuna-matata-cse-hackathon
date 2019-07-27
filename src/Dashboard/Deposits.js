/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  let current_datetime = new Date()
  let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
  return (
    <React.Fragment>
      <Title>Total Points</Title>
      <Typography component="p" variant="h4">
        {props.points}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {formatted_date}
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
        </Link>
      </div>
    </React.Fragment>
  );
}
