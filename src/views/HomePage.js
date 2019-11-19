import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Background1 from "../assets/nature.jpeg"
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: "100px 0",
        backgroundColor: "lightblue",

    },
    paper1: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: "100px 0",
        backgroundImage: `url(${Background1})`
    },
    text: {
        color: "white"
    }
}));

const HomePage = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid style={{ marginLeft: "1px" }} container xs={12} spacing={3} >
                <Grid style={{ margin: "55px 0" }} item xs={12}><Paper className={classes.paper1}>
                    <Typography className={classes.text} style={{ fontWeight: "bolder" }} variant="h4" gutterBottom>Nama pemilik rekening</Typography>
                    <Typography className={classes.text} variant="h6" gutterBottom>Nomor Rekening: 987656789876</Typography>
                    <Typography className={classes.text} variant="h6" gutterBottom>Nama Bank: BNI</Typography>
                    <Typography className={classes.text} variant="h6" gutterBottom>Saldo rekening: Rp. 1000.000</Typography>
                </Paper></Grid>
                <Grid style={{ marginLeft: "1px" }} justify="center" container xs={12} spacing={3}>
                    <Grid item xs={6} sm={3}><Paper className={classes.paper}>
                        <Button component={Link} to="/riwayat">
                            <Typography variant="h5" gutterBottom>Riwayat Transaksi</Typography>
                        </Button></Paper></Grid>
                    <Grid item xs={6} sm={3}><Paper className={classes.paper}>
                        <Button component={Link} to="/transfer">
                            <Typography variant="h5" gutterBottom>Transfer</Typography>
                        </Button>
                    </Paper></Grid>
                </Grid>
            </Grid>
        </div >
    );
}

export default HomePage;