import React from "react"
// Import the style sheet
import '../App.css';
import image from '../img/Project 1 App.gif';

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
 

export default function EatBeats(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <h1>Eats & Beats</h1>
          <p className="IntroText">Where food meets music!<br/>
            Eats and Beats App brings a unique experience to the user, by combining two of our team members passions: music & food. Our desire is to bring an easy and intuitive digital tool, to help the user quickly discover new recipes and music.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={1}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={4}>
            <h4>_GitHub repository:</h4>
            <a href="https://github.com/Team-Norm-1/project-1" target="_blank" rel="noreferrer">https://github.com/Team-Norm-1/project-1</a>
            <h4>_Live link:</h4>
            <a href="https://team-norm-1.github.io/project-1/" target="_blank" rel="noreferrer">https://team-norm-1.github.io/project-1/</a>
            <h4>_Team members:</h4>
            <a href="https://github.com/radergan" class="font-white" target="_blank" rel="noreferrer">Patrick J Dalton, </a>
            <a href="https://github.com/emblair96" class="font-white" target="_blank" rel="noreferrer">Emily Blair, </a>
            <a href="https://github.com/amberchiodini" class="font-white" target="_blank" rel="noreferrer">Amber Chiodini, </a>
            <a href="https://github.com/DaniloBracho1992" class="font-white" target="_blank" rel="noreferrer">Danilo Bracho</a>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img src={image} alt="eats and beats app" class="img-project img-shadow"/>
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
          <p className="IntroText">This App will help the user expand their horizons through food and music. Simple and intuitive, get a new recipe to try and new songs to listen to.</p>
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
          <p className="IntroText">AS A: Food and music enthusiast<br/>
            I WANT: to easily discover new recipes to try and music to enjoy<br/>
            SO THAT: I can explore new music and develop better cooking skills</p>
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
              <li><i class="fab fa-js-square"></i> JavaScript</li>
              <li><i class="fas fa-file-code"></i> jQuery v3.2.1</li>
              <li><i class="fas fa-file-code"></i> Bulma.io</li>
              <li><i class="fab fa-github-square"></i> GitHub</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <h2>_APIs</h2>
        </Grid>
        <Grid item xs={12} sm={5}>
          <ul className="IntroText">
              <li><a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer"><i class="fas fa-utensils"></i> Spoonacular</a></li>
              <li><a href="https://developers.deezer.com/" class="font-white" target="_blank" rel="noreferrer"><i class="fas fa-music"></i> Deezer</a></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>
      </Grid>
    </div>
  )
}