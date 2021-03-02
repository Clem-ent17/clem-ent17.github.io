// Import the Component component from React
import React from 'react'; 
// Import the Link component
import { Link } from 'react-router-dom'; 
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

export default function Thumbnail(props) {
const classes = useStyles();

  return (
    <Link to={props.link}>
      <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item sm={12}>
              <p className="small-text silver text-shadow ">_{props.category}</p>
              <img src={props.image} alt={props.title} width="100%" className="hover-img"/>
              <h2>{props.title}</h2>
              
            </Grid>
        </Grid>
      </div>
    </Link>
  );
}