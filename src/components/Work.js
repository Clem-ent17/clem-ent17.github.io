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

          <Grid item xs={12} sm={4}>
            <Thumbnail
              link="/partyhub"
              image="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              title="Party hub"
              category="Development"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Thumbnail
              link="/twitter"
              image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              title="Twitter Newsfeed"
              category="Development"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Thumbnail
              link="/photoshop"
              image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
              title="Photoshop Redesign"
              category="Development"
            />
          </Grid>
      </Grid>
    </div>
  )
}