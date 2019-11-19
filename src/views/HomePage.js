import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: "5px black"
    },
}));


const HomePage = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={12}>
                <Grid item>lesgo</Grid>
            </Grid>
        </div>
    )


}

export default HomePage;