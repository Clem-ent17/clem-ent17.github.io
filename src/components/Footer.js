import React from "react"
// Import the style sheet
import '../App.css';

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
 
function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
            <div className="Footer">
            <h3><a href="https://www.linkedin.com/in/clement-valles/" class="text-grey"><i class="fab fa-linkedin-in"></i></a>   <a href="https://github.com/Clem-ent17" class="text-grey"><i class="fab fa-github"></i></a></h3>
            <p className="small-text">© 2020 Copyright - <span className="light">Clem</span>ent Valles Portfolio</p>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}
 
export default Footer;