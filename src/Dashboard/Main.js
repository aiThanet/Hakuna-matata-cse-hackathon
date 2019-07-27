import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';

import Chart from "./Chart";
import TheBarChart from "./TheBarChart"
import Deposits from "./Deposits";
import Orders from "./Orders";
import { Divider } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {

    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 340
  },
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    margin: theme.spacing(1),
  },
  paperM: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

let rows = [];    // user history
let userPoints = 35; // user starting points
let pointToday = 0;
let chartData = [{date: '2019-7-26', uv: 15},{date: '2019-7-27', uv: 20}]; // for chart data, should contain the history of previous days

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function createData(id, date, pointsAdded) {
  let current_datetime = new Date()
  let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
  date = formatted_date.toString();
  userPoints = userPoints + 5
  pointToday = pointToday + 5
  let pointsTotal = userPoints
  return { id, date, pointsAdded, pointsTotal };
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    margin: 'auto',
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Dashboard() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addData = () => {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
    rows.unshift(createData(rand(), 'date', 5))
    let isIn = false
    chartData.forEach(ele=>{
      if(ele.date == formatted_date){
        ele.uv += 5
        isIn = true
      }
    })
    if(!isIn)
      chartData = chartData.concat([{date: formatted_date, uv: pointToday}])
    handleOpen();
  };
  return (
    <div>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <TheBarChart data = {chartData}/>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits points = {userPoints} />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders data={rows} />
          </Paper>

        </Grid>
      </Grid>
      <div>
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={addData}>
          <AddIcon />
        </Fab>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={modalStyle} className={classes.paperM}>
            <h2 id="modal-title">One Bottle Recycled</h2>
            <p id="simple-modal-description">
              Keep them coming
          </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
