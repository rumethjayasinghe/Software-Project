import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  TextField,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

// Create a styled TableCell for the header
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Change to your desired color
  color: theme.palette.common.white, // Text color
  fontWeight: "bold",
}));

const ParameterTable = () => {
  const [parameters, setParameters] = useState([]); // State to store parameter data
  const [newParameter, setNewParameter] = useState({
    parameter: "",
    hasDeleted: false,
    createdTime: "",
    modifiedTime: "",
    plannedEpld: "",
  }); // State for new parameter input
  const [editingParameter, setEditingParameter] = useState(null); // State to track the parameter being edited
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userRole, setUserRole] = useState("admin"); // Mock user role; replace with actual role checking logic

  // Fetch initial parameter data (mocked for demonstration)
  useEffect(() => {
    const initialData = [
      {
        parameter: "Param A",
        hasDeleted: false,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: "2024-12-31",
      },
      {
        parameter: "Param B",
        hasDeleted: true,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: "2024-11-30",
      },
    ];
    setParameters(initialData);
  }, []);

  // Handle adding a new parameter
  const handleAddParameter = () => {
    const newParameterData = {
      ...newParameter,
      createdTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
    };
    setParameters([...parameters, newParameterData]);
    resetNewParameter();
  };

  // Handle editing a parameter
  const handleEditParameter = (param) => {
    setEditingParameter(param);
    setNewParameter({ ...param });
  };

  // Handle saving the edited parameter
  const handleSaveEdit = () => {
    const updatedParameters = parameters.map((param) =>
      param.parameter === editingParameter.parameter
        ? { ...newParameter, modifiedTime: new Date().toISOString() }
        : param
    );
    setParameters(updatedParameters);
    resetNewParameter();
    setEditingParameter(null);
  };

  // Handle deleting a parameter
  const handleDeleteParameter = (parameter) => {
    setParameters(parameters.filter((param) => param.parameter !== parameter));
  };

  // Reset new parameter input
  const resetNewParameter = () => {
    setNewParameter({
      parameter: "",
      hasDeleted: false,
      createdTime: "",
      modifiedTime: "",
      plannedEpld: "",
    });
  };

  // Auto-update data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setParameters((prevParameters) =>
        prevParameters.map((param) => ({
          ...param,
          modifiedTime: new Date().toISOString(), // Update modified time to current time
        }))
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

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
      {/* Form for adding/editing parameters */}
      <div className="mb-4">
        <TextField
          label="Parameter"
          variant="outlined"
          value={newParameter.parameter}
          onChange={(e) =>
            setNewParameter({ ...newParameter, parameter: e.target.value })
          }
          className="mr-2"
        />
        <TextField
          label="Has Deleted"
          type="checkbox"
          checked={newParameter.hasDeleted}
          onChange={(e) =>
            setNewParameter({ ...newParameter, hasDeleted: e.target.checked })
          }
          className="mr-2"
        />
        <TextField
          label="Planned Epld"
          variant="outlined"
          value={newParameter.plannedEpld}
          onChange={(e) =>
            setNewParameter({ ...newParameter, plannedEpld: e.target.value })
          }
          className="mr-2"
        />
        {editingParameter ? (
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddParameter}>
            Add Parameter
          </Button>
        )}
      </div>

      {/* Parameter Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Parameter</StyledTableCell>
              <StyledTableCell>Has Deleted</StyledTableCell>
              <StyledTableCell>Created Time</StyledTableCell>
              <StyledTableCell>Modified Time</StyledTableCell>
              <StyledTableCell>Planned Epld</StyledTableCell>
              {userRole === "admin" && <StyledTableCell>Actions</StyledTableCell>} {/* Only show Actions for admin */}
            </TableRow>
          </TableHead>
          <TableBody>
            {parameters
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((param, index) => (
                <TableRow key={index}>
                  <TableCell>{param.parameter}</TableCell>
                  <TableCell>{param.hasDeleted ? "Yes" : "No"}</TableCell>
                  <TableCell>{param.createdTime}</TableCell>
                  <TableCell>{param.modifiedTime}</TableCell>
                  <TableCell>{param.plannedEpld}</TableCell>
                  {userRole === "admin" && ( // Only show buttons for admin
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <IconButton
                          color="secondary"
                          onClick={() => handleDeleteParameter(param.parameter)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          onClick={() => handleEditParameter(param)}
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
        count={parameters.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ParameterTable;
