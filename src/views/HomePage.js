import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Background1 from "../assets/nature.jpeg"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: "115px 0",
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

    const handleTransfer = () => {
        // let i = 0;

        MySwal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Step 1',
                text: 'Jenis Transaksi'
            },
            {
                title: 'Step 2',
                text: 'Masukkan rekening tujuan'
            },
            {
                title: 'Step 3',
                text: 'Masukkan jumlah nominal'
            },
        ]).then((result) => {
            if (result.value) {
                const answers = JSON.stringify(result.value)

                MySwal.fire({
                    title: 'Last Check!',
                    html: `
                  Spesifikasi Transfer:
                    <pre>${answers}</pre>
                `,
                    confirmButtonText: 'Submit!',
                    showCancelButton: true,
                    // timer: 2000000,
                    // timerProgressBar: true,
                })
                // i = 1;
            }
        })
        // .then(() => {
        //     console.log(i)

        //     // if (result.value) {
        //     MySwal.fire(
        //         'Transferred!',
        //         'Your money has been transferred.',
        //         'success'
        //     )
        //     // }
        // })
    }

    return (
        <div className={classes.root}>
            <Grid style={{ marginLeft: "1px" }} container item xs={12} spacing={3} >
                <Grid style={{ margin: "55px 0" }} item xs={12}><Paper className={classes.paper1}>
                    <Typography className={classes.text} style={{ fontWeight: "bolder" }} variant="h4" gutterBottom>Nama pemilik rekening</Typography>
                    <Typography className={classes.text} variant="h6" gutterBottom>Nomor Rekening: 987656789876</Typography>
                    <Typography className={classes.text} variant="h6" gutterBottom>Nama Bank: BNI</Typography>
                    <Typography className={classes.text} variant="h6" gutterBottom>Saldo rekening: Rp. 1000.000</Typography>
                </Paper></Grid>
                <Grid style={{ marginLeft: "1px" }} justify="center" container item xs={12} spacing={3}>
                    <Grid item xs={6} sm={3}><Paper className={classes.paper}>
                        <Button component={Link} to="/riwayat">
                            <Typography variant="h5" gutterBottom>Riwayat Transaksi</Typography>
                        </Button></Paper></Grid>
                    <Grid item xs={6} sm={3}><Paper className={classes.paper}>
                        <Button onClick={handleTransfer}>
                            <Typography variant="h5" gutterBottom>Transfer</Typography>
                        </Button>
                    </Paper></Grid>
                </Grid>
            </Grid>
        </div >
    );
}

export default HomePage;