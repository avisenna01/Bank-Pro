import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        paddingTop: "150px",
        paddingBottom: "150px"

    },
    table: {
        minWidth: 1000,
        minHeight: 500,

    },

}));

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
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
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Waktu Transaksi</StyledTableCell>
                                <StyledTableCell align="right">Jenis Transaksi</StyledTableCell>
                                <StyledTableCell align="right">Jumlah Transaksi</StyledTableCell>
                                <StyledTableCell align="right">Rekening Terkait</StyledTableCell>
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
                </Grid>
            </Grid>
        </div>
    )


}

export default History;