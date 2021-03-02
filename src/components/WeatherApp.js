import React from "react"
// Import the style sheet
import '../App.css';
import image from '../img/Weather-app.gif';

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
 
export default function WeatherApp(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <h1>Weather App</h1>
          <p className="IntroText">Weather board for traveler to display useful forecast informations.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={1}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <h4>_GitHub Repository:</h4>
          <a href="https://github.com/Clem-ent17/Weather-Dashboard" target="_blank" rel="noreferrer">https://github.com/Clem-ent17/Weather-Dashboard</a>
          <h4>_Live Link:</h4>
          <a href="https://clem-ent17.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">https://clem-ent17.github.io/Weather-Dashboard/</a>
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
          <p className="IntroText">This App display the actual weather for the city the user search, the forecast for the next 5 days, and keep track of this research.</p>
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
          <p className="IntroText">AS A: traveler I need access useful forecast informations<br/>
            I WANT: to see the weather outlook for multiple cities<br/>
            SO THAT: can plan a trip accordingly</p>
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