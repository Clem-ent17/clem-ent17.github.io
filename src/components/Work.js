// Import the Component component from React
import React from "react"
// Import the Thumbnail component
import Thumbnail from './Thumbnail'; 
// Import the style sheet
import '../App.css';

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));
 
export default function Work(props) {
  const classes = useStyles();

  return (
    // Render a Thumbnail component
    <div className={classes.root}>
      <Grid container spacing={4}>
          <Grid item xs={12} >
            {/* empty           */}
          </Grid>

          <Grid item xs={12} >
            <h1>Discover my work:</h1>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Thumbnail
              link="/weatherapp"
              image="https://images.unsplash.com/photo-1567570744802-06798cc9d079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              title="Weather App"
              category="Development"
            />
            <h1 className="silver text-shadow">I always look for the best solution</h1>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Thumbnail
              link="/eatbeats"
              image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              title="Eats & beats"
              category="Development"
          />
          </Grid>
          

          <Grid item xs={12} sm={8}>
            <Thumbnail
              link="/partyhub"
              image="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              title="Party hub"
              category="Development"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Thumbnail
              link="/dayplanner"
              image="https://images.unsplash.com/photo-1584628804857-8f29a86c3f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1060&q=80"
              title="Day planner"
              category="Development"
            />
            <h1 className="silver text-shadow">I develop intuitive design</h1>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Thumbnail
              link="/budgettracker"
              image="https://images.unsplash.com/photo-1580482982890-4caedd6f97ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              title="Budget Tracker"
              category="Development"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Thumbnail
              link="/burgerapp"
              image="https://images.unsplash.com/photo-1613851779795-ffd0e7b8b4a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
              title="Burger App"
              category="Development"
            />
          </Grid>
      </Grid>
    </div>
  )
}