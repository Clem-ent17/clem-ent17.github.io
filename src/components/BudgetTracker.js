import React from "react"
// Import the style sheet
import '../App.css';
import image from '../img/budgetTracker.gif';

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
 

export default function BudgetTracker(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <h1>Budget tracker</h1>
          <p className="IntroText">Track all financial transactions and keep an eye on your budget, even when you are out of connection.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* empty           */}
        </Grid>

        <Grid item xs={12} sm={1}>
          {/* empty           */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <h4>_GitHub repository:</h4>
          <a href="https://github.com/Clem-ent17/budget-traker" target="_blank" rel="noreferrer">https://github.com/Clem-ent17/budget-traker</a>
          <h4>_Live link:</h4>
          <a href="https://blooming-hollows-28066.herokuapp.com/" target="_blank" rel="noreferrer">https://blooming-hollows-28066.herokuapp.com/</a>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img src={image} alt="budget tracker app" class="img-project img-shadow"/>
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
          <p className="IntroText">The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.</p>
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
          <p className="IntroText">AS A: avid traveller<br/>
            I WANT: to be able to track my withdrawals and deposits with or without a data/internet connection<br/>
            SO THAT: my account balance is accurate when I am traveling</p>
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
              <li><i class="fas fa-file-code"></i> Compression</li>
              <li><i class="fas fa-file-code"></i> Express</li>
              <li><i class="fas fa-file-code"></i> Lite-server</li>
              <li><i class="fas fa-file-code"></i> Mongoose</li>
              <li><i class="fas fa-file-code"></i> Morgan</li>
              <li><i class="fas fa-file-code"></i> MongoDB Atlas</li>
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