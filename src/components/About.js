import React from "react"
// Import the style sheet
import '../App.css';
import image from '../img/Clement-ProfilPicture-transparent.png';

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
 
function About(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={6} sm={6}>
          <h1><span>Clement Valles</span></h1>
          <p>Originally from France, I moved to Chicago in 2018 as a permanent resident. I wish to utilize my professional experiences as well as my passion for design, art, and new technologies in a dynamic and innovative career setting.</p>

          <p>One of my defining qualities as a designer and a coder is my ability to take a step back from my work and to look at it through the eyes of the user. Throughout my many professional experiences, teamwork has always been one of my core values. I believe that together, as a team, nothing is impossible.</p>

          <p>I have strong design experiences in marketing, packaging, email, social media, UI, and User Experience design.</p>

          <p>I use my passion for technology and my desire to learn, to always push my limits. I believe that design and apps are incredible and powerful connection between us.</p>
        </Grid>
        <Grid item xs={6} sm={6}>
          <img src={image} alt="About me Clement Valles" class="img-portfolio img-shadow"/>
        </Grid>
      </Grid>
    </div>
  )
}
 
export default About;