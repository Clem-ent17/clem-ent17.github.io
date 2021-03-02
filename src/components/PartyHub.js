import React from "react"
// Import the style sheet
import '../App.css';
import image from '../img/partyhub-1.png';
import image2 from '../img/partyhub-2.png';

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
 

export default function PartyHub(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <h1>Neighborhood party hub</h1>
          <p className="IntroText">Create a event and invite your friends and neighbors to it! Keep a tight communication, to create the best memories together.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={1}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={4}>
            <h4>_GitHub repository:</h4>
            <a href="https://github.com/Project-2-group-2/Project-2" target="_blank" rel="noreferrer">https://github.com/Project-2-group-2/Project-2</a>
            <h4>_Live link:</h4>
            <a href="https://morning-thicket-05206.herokuapp.com/" target="_blank" rel="noreferrer">https://morning-thicket-05206.herokuapp.com/</a>
            <h4>_Team members:</h4>
            <a href="https://github.com/wjgoers" class="font-white" target="_blank" rel="noreferrer">Bill Goers, </a>
            <a href="https://github.com/jbrad12" class="font-white" target="_blank" rel="noreferrer">Jacob Bradshaw, </a>
            <a href="https://github.com/mikebrucato" class="font-white" target="_blank" rel="noreferrer">Michael Brucato</a>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img src={image} alt="party hub app" class="img-project img-shadow img-project-spacing"/>
          
          <img src={image2} alt="party hub app" class="img-project img-shadow"/>
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
          <p className="IntroText">This app is a hub for you and your community to create party and enjoy a social moment together, with an easy way to organize event.</p>
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
          <p className="IntroText">AS A: user involved in my community 
            I WANT: to create an event
            SO THAT: I can organize and invite people</p>
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
              <li><i class="fas fa-file-code"></i> Bootstrap</li>
              <li><i class="fas fa-file-code"></i> jQuery v3.2.1</li>
              <li><i class="fas fa-file-code"></i> Express</li>
              <li><i class="fas fa-file-code"></i> Express.handlebars</li>
              <li><i class="fas fa-file-code"></i> Sequelize</li>
              <li><i class="fab fa-github-square"></i> GitHub</li>
              <li><i class="fas fa-file-code"></i> Heroku</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={2}>
          {/* empty           */}
        </Grid>
      </Grid>
    </div>
  )
}