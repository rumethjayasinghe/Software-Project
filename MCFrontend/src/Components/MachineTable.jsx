import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, Button } from "@mui/material";

const MachineTable = () => {
  const [machines, setMachines] = useState([]); // State to store machine data
  const [newMachine, setNewMachine] = useState({
    machineCode: "",
    machineType: "",
    sapResource: "",
    hasDeleted: false,
    createdTime: "",
    modifiedTime: "",
    plannedEpld: ""
  }); // State for new machine input
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch initial machine data (mocked for demonstration)
  useEffect(() => {
    // Replace with actual data fetching
    const initialData = [
      {
        machineCode: 'PMP-PU',
        machineType: 'KNT',
        sapResource: 'NULL',
        hasDeleted: false,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '24'
      },
      {
        machineCode: 'PMP1-PU',
        machineType: 'KNT',
        sapResource: 'NULL',
        hasDeleted: false,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '24'
      },
    ];
    setMachines(initialData);
  }, []);

  // Handle adding a new machine
  const handleAddMachine = () => {
    const newMachineData = {
      ...newMachine,
      createdTime: new Date().toISOString(), // Set created time
      modifiedTime: new Date().toISOString() // Set modified time
    };
    setMachines([...machines, newMachineData]);
    setNewMachine({
      machineCode: "",
      machineType: "",
      sapResource: "",
      hasDeleted: false,
      createdTime: "",
      modifiedTime: "",
      plannedEpld: ""
    });
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
          label="Machine Code"
          variant="outlined"
          value={newMachine.machineCode}
          onChange={(e) => setNewMachine({ ...newMachine, machineCode: e.target.value })}
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
          label="SAP Resource"
          variant="outlined"
          value={newMachine.sapResource}
          onChange={(e) => setNewMachine({ ...newMachine, sapResource: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Has Deleted"
          type="checkbox"
          checked={newMachine.hasDeleted}
          onChange={(e) => setNewMachine({ ...newMachine, hasDeleted: e.target.checked })}
          className="mr-2"
        />
        <TextField
          label="Planned Epld"
          variant="outlined"
          value={newMachine.plannedEpld}
          onChange={(e) => setNewMachine({ ...newMachine, plannedEpld: e.target.value })}
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
              <TableCell>Machine Code</TableCell>
              <TableCell>Machine Type</TableCell>
              <TableCell>SAP Resource</TableCell>
              <TableCell>Has Deleted</TableCell>
              <TableCell>Created Time</TableCell>
              <TableCell>Modified Time</TableCell>
              <TableCell>Planned Epld</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {machines.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((machine, index) => (
              <TableRow key={index}>
                <TableCell>{machine.machineCode}</TableCell>
                <TableCell>{machine.machineType}</TableCell>
                <TableCell>{machine.sapResource}</TableCell>
                <TableCell>{machine.hasDeleted ? "Yes" : "No"}</TableCell>
                <TableCell>{machine.createdTime}</TableCell>
                <TableCell>{machine.modifiedTime}</TableCell>
                <TableCell>{machine.plannedEpld}</TableCell>
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
