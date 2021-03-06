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
        textAlign: 'left',
        color: theme.palette.text.secondary,
        padding: "100px 70px",
        backgroundImage: `url(${Background1})`
    },
    text: {
        color: "white",
        fontFamily: 'Work Sans, sans-serif'
    }
}));

const HomePage = () => {
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
            console.log("avisennalesgooo")
            console.log(result.value)
            if (result.value) {
                const texting = ["nemo", "dori"]
                console.log(texting)
                const answers = result.value
                console.log(answers[0])
                console.log(answers[1])
                console.log(answers[1])
                console.log(answers)
                console.log("###############")
                MySwal.fire({
                    title: 'Last Check!',
                    html: `
                  Spesifikasi Transfer:
                    <pre>${answers}</pre>
                `,
                    // input: `${answers[0]}`,
                    confirmButtonText: 'Submit!',
                    showCancelButton: true,
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                        return fetch(`//api.github.com/users/${answers[0]}`)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(response.statusText)
                                }
                                return response.json()
                            })
                            .catch(error => {
                                Swal.showValidationMessage(
                                    `Request failed: ${error}`
                                )
                            })
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            title: `${result.value} title`,
                            text: `${result} text`,
                            imageUrl: result.value.avatar_url
                        })
                        console.log("------------")
                        console.log(result)
                        console.log(result.value)
                        console.log("++++++++++++")
                    }
                })
                // i = 1;
            }
        })
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
                        <Button component={Link} to="/history">
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