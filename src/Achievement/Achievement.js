import React from "react";

import { SystemContext } from "../SystemContext.js";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  item_root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  point: {},
  point_item: {
    fontSize: 20,
    color: "black"
  }
}));

const daily_quests = [
  {
    title: "Collect 1 Bottle",
    reward: 1,
    description: "Add 1 bottle in a day",
    img: "/quests/water.png"
  },
  {
    title: "Collect 3 Bottles",
    reward: 3,
    description: "Add 3 bottles in a day",
    img: "/quests/water.png"
  },
  {
    title: "Collect 1 Can",
    reward: 1,
    description: "Add 1 can in a day",
    img: "/quests/can.png"
  },
  {
    title: "Collect 3 Cans",
    reward: 3,
    description: "Add 3 cans in a day",
    img: "/quests/can.png"
  }
];

const achievement_quests = [
  {
    title: "Collect 100 Bottles",
    reward: 200,
    progress: 28,
    total: 100,
    img: "/quests/water.png"
  },
  {
    title: "Collect 100 Points",
    reward: 3,
    progress: 45,
    total: 100,
    img: "/quests/piggy-bank.png"
  },
  {
    title: "Collect 50 Cans",
    reward: 60,
    progress: 10,
    total: 50,
    img: "/quests/can.png"
  }
];

export default function Achievement() {
  const classes = useStyles();
  const daily_items = daily_quests.map((item, key) => (
    <div key={key}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.title} src={item.img} />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {item.description}
              </Typography>
            </React.Fragment>
          }
        />

        <div className={classes.point}>
          <span className={classes.point_item}>{item.reward}</span> points
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  ));

  const achievements = achievement_quests.map((item, key) => (
    <div key={key}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.title} src={item.img} />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {item.progress} /
              </Typography>
              {item.total}
            </React.Fragment>
          }
        />
        <div className={classes.point}>
          <span className={classes.point_item}>{item.reward}</span> points
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  ));
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h2>Daily Quest</h2>
          <Paper className={classes.paper}>
            <List className={classes.item_root}>{daily_items}</List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Achievement</h2>
          <Paper className={classes.paper}>
            <List className={classes.item_root}>{achievements}</List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// const Achievement = () => (
//   <SystemContext.Consumer>
//     <div>Achievement Page </div>
//   </SystemContext.Consumer>
// );

// Achievement.comtextType = SystemContext;
