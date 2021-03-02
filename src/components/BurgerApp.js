import React from "react"
// Import the style sheet
import '../App.css';
import image from '../img/burgerApp.gif';

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));
 

export default function BurgerApp(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <h1>Burger app</h1>
          <p className="IntroText">A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={1}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <h4>_GitHub repository:</h4>
          <a href="https://github.com/Clem-ent17/burger/" target="_blank" rel="noreferrer">https://github.com/Clem-ent17/burger/</a>
          <h4>_Live link:</h4>
          <a href="https://fierce-waters-61441.herokuapp.com/" target="_blank" rel="noreferrer">https://fierce-waters-61441.herokuapp.com/</a>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img src={image} alt="burger app" class="img-project img-shadow"/>
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
          <p className="IntroText">Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.</p>
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
          <p className="IntroText">AS A: enthousiastic burger lover<br/>
            I WANT: to be able to enter and save the next burger I want to eat<br/>
            SO THAT: I can check my list and keep track of my tasty meal.</p>
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
              <li><i class="fas fa-file-code"></i> Express</li>
              <li><i class="fas fa-file-code"></i> Express-handlebars</li>
              <li><i class="fas fa-file-code"></i> MySQL</li>
              <li><i class="fas fa-file-code"></i> JAWSDB MySQL</li>
              <li><i class="fas fa-file-code"></i> Heroku</li>
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