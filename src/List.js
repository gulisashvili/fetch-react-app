import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

// Sort Based on listId then name 
function sortList(arr) {
  return arr.filter(d => d.name).sort(function (a, b) {
    let aListId = a.listId;
    let bListId = b.listId;
    let aName = a.name;
    let bName = b.name;

    if (aListId === bListId) {
      return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
    }

    return (aListId < bListId) ? -1 : 1;
  });
}

function List({ data }) {
  const list = sortList(data)
  const classes = useStyles();

  return (
    <div className="List">

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">List Id</TableCell>
              <TableCell align="right">Name&nbsp;(g)</TableCell>
              <TableCell align="right">ID&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              list.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="right">{row.listId}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default List;