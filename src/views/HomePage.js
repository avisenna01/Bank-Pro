import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: "5px solid black"
    },
}));


const HomePage = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={12} spacing={3}>
                <Grid item xs={12}><Paper className={classes.paper}>lesgo</Paper></Grid>
                <Grid item xs={12} md={6}><Paper className={classes.paper}>lesgo</Paper></Grid>
                <Grid item xs={12} md={6}><Paper className={classes.paper}>lesgo</Paper></Grid>
            </Grid>
        </div>
    )


}

export default HomePage;