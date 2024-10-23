import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

// Create a styled TableCell for the header
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Change to your desired color
  color: theme.palette.common.white, // Text color
  fontWeight: 'bold',
}));

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
  const [editingMachine, setEditingMachine] = useState(null); // State to track the machine being edited
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userRole, setUserRole] = useState('admin'); // Mock user role; replace with actual role checking logic

  // Fetch initial machine data (mocked for demonstration)
  useEffect(() => {
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
      createdTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString()
    };
    setMachines([...machines, newMachineData]);
    resetNewMachine();
  };

  // Handle editing a machine
  const handleEditMachine = (machine) => {
    setEditingMachine(machine);
    setNewMachine({ ...machine });
  };

  // Handle saving the edited machine
  const handleSaveEdit = () => {
    const updatedMachines = machines.map(machine =>
      machine.machineCode === editingMachine.machineCode ? { ...newMachine, modifiedTime: new Date().toISOString() } : machine
    );
    setMachines(updatedMachines);
    resetNewMachine();
    setEditingMachine(null);
  };

  // Handle deleting a machine
  const handleDeleteMachine = (machineCode) => {
    setMachines(machines.filter(machine => machine.machineCode !== machineCode));
  };

  // Reset new machine input
  const resetNewMachine = () => {
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
      {/* Form for adding/editing machines */}
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
        {editingMachine ? (
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddMachine}>
            Add Machine
          </Button>
        )}
      </div>

      {/* Machine Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Machine Code</StyledTableCell>
              <StyledTableCell>Machine Type</StyledTableCell>
              <StyledTableCell>SAP Resource</StyledTableCell>
              <StyledTableCell>Has Deleted</StyledTableCell>
              <StyledTableCell>Created Time</StyledTableCell>
              <StyledTableCell>Modified Time</StyledTableCell>
              <StyledTableCell>Planned Epld</StyledTableCell>
              {userRole === 'admin' && <StyledTableCell>Actions</StyledTableCell>} {/* Only show Actions for admin */}
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
                {userRole === 'admin' && ( // Only show buttons for admin
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <IconButton 
                        color="secondary" 
                        onClick={() => handleDeleteMachine(machine.machineCode)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton 
                        color="primary" 
                        onClick={() => handleEditMachine(machine)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
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
