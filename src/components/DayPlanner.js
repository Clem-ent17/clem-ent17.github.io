import React from "react"
// Import the style sheet
import '../App.css';
import image from '../img/05-third-party-apis-homework-demo.gif';

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
 

export default function DayPlanner(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <h1>Day planner</h1>
          <p className="IntroText">A easy and simple work day scheduler app to organize every tasks.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={1}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <h4>_GitHub repository:</h4>
          <a href="https://github.com/Clem-ent17/Day-Planner" target="_blank" rel="noreferrer">https://github.com/Clem-ent17/Day-Planner</a>
          <h4>_Live link:</h4>
          <a href="https://clem-ent17.github.io/Day-Planner/" target="_blank" rel="noreferrer">https://clem-ent17.github.io/Day-Planner/</a>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img src={image} alt="About me Clement Valles" class="img-portfolio img-shadow"/>
        </Grid>

        <Grid item xs={12} >
          <hr/>
        </Grid>

        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <h2>_Concept</h2>
        </Grid>
        <Grid item xs={12} sm={5}>
          <p className="IntroText">This app is a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.</p>
        </Grid>
        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <h2>_User story</h2>
        </Grid>
        <Grid item xs={12} sm={5}>
          <p className="IntroText">AS A: employees with busy schedules want to add important events to a daily planner<br/>
            I WANT: to add important events to a daily planner<br/>
            SO THAT: they will be able to manage their time effectively</p>
        </Grid>
        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <h2>_Technologies</h2>
        </Grid>
        <Grid item xs={12} sm={5}>
          <ul className="IntroText">
              <li><i class="fab fa-html5"></i> HTML</li>
              <li><i class="fab fa-css3-alt"></i> CSS</li>
              <li><i class="fas fa-file-code"></i> Bootstrap</li>
              <li><i class="fab fa-js-square"></i> JavaScript</li>
              <li><i class="fas fa-file-code"></i> jQuery v3.2.1</li>
              <li><i class="fas fa-file-code"></i> Moment.js</li>
              <li><i class="fab fa-github-square"></i> GitHub</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>
      </Grid>
    </div>
  )
}