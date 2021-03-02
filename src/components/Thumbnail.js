// Import the Component component from React
import React from 'react'; 
// Import the Link component
import { Link } from 'react-router-dom'; 
// Import the style sheet
import '../App.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
 
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
              <p className="small-text silver">_{props.category}</p>
              <img src={props.image} alt={props.title} width="100%" className="hover-img"/>
              <h2>{props.title}</h2>
              
            </Grid>
        </Grid>
      </div>
        {/* <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt={props.title}
                height="140"
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                {props.category}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card> */}
    </Link>
  );
}