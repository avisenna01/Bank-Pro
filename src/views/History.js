import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        overflowX: 'auto',
        paddingTop: "50px",
        height: "100vh"
    },
    table: {
        minWidth: 1000,
        minHeight: 500,
    },
    paper: {
        padding: theme.spacing(3, 2),
        outline: "5px solid #66BBFF",
    },
    title: {
        fontSize: "50px",
        fontFamily: 'Roboto, sans-serif'
    },
    tableTitle: {
        fontSize: "20px"
    },
    icon: { marginBottom: "15px", color: "white", fontSize: "50px", border: "5px solid #66BBFF", borderRadius: "50%", backgroundColor: "#66BBFF" }
}));

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#0070C9",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 16,
        fontFamily: 'Roboto, sans-serif'
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('juli 16', 'debit', `Rp` + 600000, 24525395793),
    createData('juni 18', 'kredit', `Rp` + 9000, 37893650258),
    createData('mei 10', 'kredit', `Rp` + 16050000, 24523955355),
    createData('oktober 10', 'debit', `Rp` + 3700, 67525644553),
    createData('september 1', 'kredit', `Rp` + 16000, 49345235325),
];

const History = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <ArrowBackIcon className={classes.icon} />
                    <Paper className={classes.paper}>
                        <Typography className={classes.title}>Riwayat Transaksi</Typography>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell className={classes.tableTitle}>Waktu Transaksi</StyledTableCell>
                                    <StyledTableCell className={classes.tableTitle} align="right">Jenis Transaksi</StyledTableCell>
                                    <StyledTableCell className={classes.tableTitle} align="right">Jumlah Transaksi</StyledTableCell>
                                    <StyledTableCell className={classes.tableTitle} align="right">Rekening Terkait</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )


}

export default History;