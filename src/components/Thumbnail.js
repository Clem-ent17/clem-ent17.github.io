// Import the Component component from React
import React from 'react'; 
// Import the Link component
import { Link } from 'react-router-dom'; 
// Import the style sheet
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
 
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
});

export default function Thumbnail(props) {

const classes = useStyles();

  return (
    <Link to={props.link}>
        <Card className={classes.root}>
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
        </Card>
    </Link>
  );
}