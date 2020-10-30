import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Texto</TableCell>
            <TableCell align="right">Idioma</TableCell>
            <TableCell align="right">Sentimiento</TableCell>
            <TableCell align="right">Entidades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.responseData.textArray.map((row,index) => (

            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">{props.responseData.name =='Spanish'?'Español':'Ingles'}</TableCell>
              <TableCell align="right">{props.responseData.feeling[index]<0.5?'Negativo 😟':'Positivo 🤗'}</TableCell>
              <TableCell align="right">{props.responseData.entities[index].map((entitie) => entitie + " ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
