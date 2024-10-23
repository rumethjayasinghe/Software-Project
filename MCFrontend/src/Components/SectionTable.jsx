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

const SectionTable = () => {
  const [sections, setSections] = useState([]); // State to store section data
  const [newSection, setNewSection] = useState({
    id: "",
    mainSection: "",
    subSection: "",
    machineType: "",
    parameterToleranced: "",
    threshold: "",
    hasDeleted: false,
    creatorId: "",
    modifierId: "",
    createdTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    plannedEpld: "",
    parameterShortName: "",
    sortNumber: "",
    isDynamic: false,
    equation: ""
  }); // State for new section input
  const [editingSection, setEditingSection] = useState(null); // State to track the section being edited
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch initial section data (mocked for demonstration)
  useEffect(() => {
    const initialData = [
      {
        id: '1',
        mainSection: 'Main A',
        subSection: 'Sub A1',
        machineType: 'Type A',
        parameterToleranced: 'Tolerance A',
        threshold: 5,
        hasDeleted: false,
        creatorId: 'Admin',
        modifierId: 'Admin',
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '2024-12-31',
        parameterShortName: 'Param A',
        sortNumber: 1,
        isDynamic: true,
        equation: 'x + y = z'
      },
      {
        id: '2',
        mainSection: 'Main B',
        subSection: 'Sub B1',
        machineType: 'Type B',
        parameterToleranced: 'Tolerance B',
        threshold: 10,
        hasDeleted: false,
        creatorId: 'Admin',
        modifierId: 'Admin',
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '2024-11-30',
        parameterShortName: 'Param B',
        sortNumber: 2,
        isDynamic: false,
        equation: 'x - y = z'
      },
    ];
    setSections(initialData);
  }, []);

  // Handle adding a new section
  const handleAddSection = () => {
    const newSectionData = {
      ...newSection,
      createdTime: new Date().toISOString(), // Set created time
      modifiedTime: new Date().toISOString() // Set modified time
    };
    setSections([...sections, newSectionData]);
    resetNewSection();
  };

  // Handle editing a section
  const handleEditSection = (section) => {
    setEditingSection(section);
    setNewSection({ ...section });
  };

  // Handle saving the edited section
  const handleSaveEdit = () => {
    const updatedSections = sections.map(section =>
      section.id === editingSection.id ? { ...newSection, modifiedTime: new Date().toISOString() } : section
    );
    setSections(updatedSections);
    resetNewSection();
    setEditingSection(null);
  };

  // Handle deleting a section
  const handleDeleteSection = (id) => {
    setSections(sections.filter(section => section.id !== id));
  };

  // Reset new section input
  const resetNewSection = () => {
    setNewSection({
      id: "",
      mainSection: "",
      subSection: "",
      machineType: "",
      parameterToleranced: "",
      threshold: "",
      hasDeleted: false,
      creatorId: "",
      modifierId: "",
      createdTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      plannedEpld: "",
      parameterShortName: "",
      sortNumber: "",
      isDynamic: false,
      equation: ""
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
      {/* Form for adding/editing sections */}
      <div className="mb-4">
        <TextField
          label="ID"
          variant="outlined"
          value={newSection.id}
          onChange={(e) => setNewSection({ ...newSection, id: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Main Section"
          variant="outlined"
          value={newSection.mainSection}
          onChange={(e) => setNewSection({ ...newSection, mainSection: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Sub Section"
          variant="outlined"
          value={newSection.subSection}
          onChange={(e) => setNewSection({ ...newSection, subSection: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Machine Type"
          variant="outlined"
          value={newSection.machineType}
          onChange={(e) => setNewSection({ ...newSection, machineType: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Parameter Toleranced"
          variant="outlined"
          value={newSection.parameterToleranced}
          onChange={(e) => setNewSection({ ...newSection, parameterToleranced: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Threshold"
          type="number"
          variant="outlined"
          value={newSection.threshold}
          onChange={(e) => setNewSection({ ...newSection, threshold: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Creator ID"
          variant="outlined"
          value={newSection.creatorId}
          onChange={(e) => setNewSection({ ...newSection, creatorId: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Modifier ID"
          variant="outlined"
          value={newSection.modifierId}
          onChange={(e) => setNewSection({ ...newSection, modifierId: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Planned Epld"
          variant="outlined"
          value={newSection.plannedEpld}
          onChange={(e) => setNewSection({ ...newSection, plannedEpld: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Parameter Short Name"
          variant="outlined"
          value={newSection.parameterShortName}
          onChange={(e) => setNewSection({ ...newSection, parameterShortName: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Sort Number"
          type="number"
          variant="outlined"
          value={newSection.sortNumber}
          onChange={(e) => setNewSection({ ...newSection, sortNumber: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Is Dynamic"
          type="checkbox"
          checked={newSection.isDynamic}
          onChange={(e) => setNewSection({ ...newSection, isDynamic: e.target.checked })}
          className="mr-2"
        />
        <TextField
          label="Equation"
          variant="outlined"
          value={newSection.equation}
          onChange={(e) => setNewSection({ ...newSection, equation: e.target.value })}
          className="mr-2"
        />
        {editingSection ? (
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddSection}>
            Add Section
          </Button>
        )}
      </div>

      {/* Section Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Main Section</StyledTableCell>
              <StyledTableCell>Sub Section</StyledTableCell>
              <StyledTableCell>Machine Type</StyledTableCell>
              <StyledTableCell>Parameter Toleranced</StyledTableCell>
              <StyledTableCell>Threshold</StyledTableCell>
              <StyledTableCell>Creator ID</StyledTableCell>
              <StyledTableCell>Modifier ID</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sections.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((section) => (
              <TableRow key={section.id}>
                <TableCell>{section.id}</TableCell>
                <TableCell>{section.mainSection}</TableCell>
                <TableCell>{section.subSection}</TableCell>
                <TableCell>{section.machineType}</TableCell>
                <TableCell>{section.parameterToleranced}</TableCell>
                <TableCell>{section.threshold}</TableCell>
                <TableCell>{section.creatorId}</TableCell>
                <TableCell>{section.modifierId}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditSection(section)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteSection(section.id)}>
                    <DeleteIcon />
                  </IconButton>
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
        count={sections.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default SectionTable;
