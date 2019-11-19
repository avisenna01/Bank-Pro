import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: "5px solid #66BBFF"
    },
}));


const HomePage = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={12} >
                <Grid style={{ marginBottom: "55px" }} item xs={12}><Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom>Nama pemilik rekening</Typography>
                    <Typography variant="subtitle1" gutterBottom>Nomor Rekening: 987656789876</Typography>
                    <Typography variant="subtitle1" gutterBottom>Nama Bank: BNI</Typography>
                    <Typography variant="subtitle1" gutterBottom>Saldo rekening: Rp. 1000.000</Typography>

                </Paper></Grid>
                <Grid style={{ marginLeft: "1px" }} container xs={12} spacing={3}>
                    <Grid item xs={12} md={6}><Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>Riwayat Transaksi</Typography>
                    </Paper></Grid>
                    <Grid item xs={12} md={6}><Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>Transfer</Typography>
                    </Paper></Grid>
                </Grid>
            </Grid>
        </div>
    )


}

export default HomePage;