import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, Button } from "@mui/material";

const MachineTable = () => {
  const [machines, setMachines] = useState([]); // State to store machine data
  const [newMachine, setNewMachine] = useState({ id: "", machineType: "", isActive: false }); // State for new machine input
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch initial machine data (mocked for demonstration)
  useEffect(() => {
    // Replace with actual data fetching
    const initialData = [
      { id: '1', machineType: 'Type A', isActive: true },
      { id: '2', machineType: 'Type B', isActive: false },
    ];
    setMachines(initialData);
  }, []);

  // Handle adding a new machine
  const handleAddMachine = () => {
    setMachines([...machines, newMachine]);
    setNewMachine({ id: "", machineType: "", isActive: false });
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {/* Form for adding new machines */}
      <div className="mb-4">
        <TextField
          label="Machine ID"
          variant="outlined"
          value={newMachine.id}
          onChange={(e) => setNewMachine({ ...newMachine, id: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Machine Type"
          variant="outlined"
          value={newMachine.machineType}
          onChange={(e) => setNewMachine({ ...newMachine, machineType: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Active"
          type="checkbox"
          checked={newMachine.isActive}
          onChange={(e) => setNewMachine({ ...newMachine, isActive: e.target.checked })}
          className="mr-2"
        />
        <Button variant="contained" color="primary" onClick={handleAddMachine}>
          Add Machine
        </Button>
      </div>

      {/* Machine Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Machine Type</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {machines.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((machine, index) => (
              <TableRow key={index}>
                <TableCell>{machine.id}</TableCell>
                <TableCell>{machine.machineType}</TableCell>
                <TableCell>{machine.isActive ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={machines.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default MachineTable;
