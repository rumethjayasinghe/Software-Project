import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, Button, IconButton, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

// Create a styled TableCell for the header
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Change to your desired color
  color: theme.palette.common.white, // Text color
  fontWeight: 'bold',
}));

const ParameterQualityTable = () => {
  const [parameters, setParameters] = useState([]); // State to store parameter quality data
  const [newParameter, setNewParameter] = useState({
    id: "",
    plannedEpld: "",
    materialCode: "",
    parameter: "",
    minValue: "",
    target: "",
    maxValue: ""
  }); // State for new parameter input
  const [editingParameter, setEditingParameter] = useState(null); // State to track the parameter being edited
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch initial parameter quality data (mocked for demonstration)
  useEffect(() => {
    const initialData = [
      {
        id: '1',
        plannedEpld: '2024-12-31',
        materialCode: 'MTR001',
        parameter: 'Parameter A',
        minValue: 10,
        target: 20,
        maxValue: 30
      },
      {
        id: '2',
        plannedEpld: '2024-11-30',
        materialCode: 'MTR002',
        parameter: 'Parameter B',
        minValue: 5,
        target: 15,
        maxValue: 25
      },
    ];
    setParameters(initialData);
  }, []);

  // Handle adding a new parameter quality entry
  const handleAddParameter = () => {
    const newParameterData = {
      ...newParameter
    };
    setParameters([...parameters, newParameterData]);
    resetNewParameter();
  };

  // Handle editing a parameter
  const handleEditParameter = (parameter) => {
    setEditingParameter(parameter);
    setNewParameter({ ...parameter });
  };

  // Handle saving the edited parameter
  const handleSaveEdit = () => {
    const updatedParameters = parameters.map(param =>
      param.id === editingParameter.id ? newParameter : param
    );
    setParameters(updatedParameters);
    resetNewParameter();
    setEditingParameter(null);
  };

  // Handle deleting a parameter
  const handleDeleteParameter = (id) => {
    setParameters(parameters.filter(param => param.id !== id));
  };

  // Reset new parameter input
  const resetNewParameter = () => {
    setNewParameter({
      id: "",
      plannedEpld: "",
      materialCode: "",
      parameter: "",
      minValue: "",
      target: "",
      maxValue: ""
    });
    setEditingParameter(null);
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
      {/* Form for adding/editing parameter quality entries */}
      <div className="mb-4">
        <TextField
          label="ID"
          variant="outlined"
          value={newParameter.id}
          onChange={(e) => setNewParameter({ ...newParameter, id: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Planned Epld"
          variant="outlined"
          value={newParameter.plannedEpld}
          onChange={(e) => setNewParameter({ ...newParameter, plannedEpld: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Material Code"
          variant="outlined"
          value={newParameter.materialCode}
          onChange={(e) => setNewParameter({ ...newParameter, materialCode: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Parameter"
          variant="outlined"
          value={newParameter.parameter}
          onChange={(e) => setNewParameter({ ...newParameter, parameter: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Min Value"
          variant="outlined"
          type="number"
          value={newParameter.minValue}
          onChange={(e) => setNewParameter({ ...newParameter, minValue: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Target"
          variant="outlined"
          type="number"
          value={newParameter.target}
          onChange={(e) => setNewParameter({ ...newParameter, target: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Max Value"
          variant="outlined"
          type="number"
          value={newParameter.maxValue}
          onChange={(e) => setNewParameter({ ...newParameter, maxValue: e.target.value })}
          className="mr-2"
        />
        {editingParameter ? (
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddParameter}>
            Add Parameter Quality
          </Button>
        )}
      </div>

      {/* Parameter Quality Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Planned Epld</StyledTableCell>
              <StyledTableCell>Material Code</StyledTableCell>
              <StyledTableCell>Parameter</StyledTableCell>
              <StyledTableCell>Min Value</StyledTableCell>
              <StyledTableCell>Target</StyledTableCell>
              <StyledTableCell>Max Value</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parameters.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((param) => (
              <TableRow key={param.id}>
                <TableCell>{param.id}</TableCell>
                <TableCell>{param.plannedEpld}</TableCell>
                <TableCell>{param.materialCode}</TableCell>
                <TableCell>{param.parameter}</TableCell>
                <TableCell>{param.minValue}</TableCell>
                <TableCell>{param.target}</TableCell>
                <TableCell>{param.maxValue}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <IconButton color="primary" onClick={() => handleEditParameter(param)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDeleteParameter(param.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={parameters.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ParameterQualityTable;
