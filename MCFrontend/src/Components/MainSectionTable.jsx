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

const MainSectionTable = () => {
  const [sections, setSections] = useState([]); // State to store section data
  const [newSection, setNewSection] = useState({
    mainSection: "",
    mainSectionName: "",
    hasDeleted: false,
    createdTime: "",
    modifiedTime: "",
    plannedEpld: ""
  }); // State for new section input
  const [editingSection, setEditingSection] = useState(null); // State to track the section being edited
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch initial section data (mocked for demonstration)
  useEffect(() => {
    const initialData = [
      {
        mainSection: 'Section A',
        mainSectionName: 'Main A',
        hasDeleted: false,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '2024-12-31'
      },
      {
        mainSection: 'Section B',
        mainSectionName: 'Main B',
        hasDeleted: true,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '2024-11-30'
      },
    ];
    setSections(initialData);
  }, []);

  // Handle adding a new section
  const handleAddSection = () => {
    const newSectionData = {
      ...newSection,
      createdTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString()
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
      section.mainSection === editingSection.mainSection ? { ...newSection, modifiedTime: new Date().toISOString() } : section
    );
    setSections(updatedSections);
    resetNewSection();
    setEditingSection(null);
  };

  // Handle deleting a section
  const handleDeleteSection = (mainSection) => {
    setSections(sections.filter(section => section.mainSection !== mainSection));
  };

  // Reset new section input
  const resetNewSection = () => {
    setNewSection({
      mainSection: "",
      mainSectionName: "",
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
      {/* Form for adding/editing sections */}
      <div className="mb-4">
        <TextField
          label="Main Section"
          variant="outlined"
          value={newSection.mainSection}
          onChange={(e) => setNewSection({ ...newSection, mainSection: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Main Section Name"
          variant="outlined"
          value={newSection.mainSectionName}
          onChange={(e) => setNewSection({ ...newSection, mainSectionName: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Has Deleted"
          type="checkbox"
          checked={newSection.hasDeleted}
          onChange={(e) => setNewSection({ ...newSection, hasDeleted: e.target.checked })}
          className="mr-2"
        />
        <TextField
          label="Planned Epld"
          variant="outlined"
          value={newSection.plannedEpld}
          onChange={(e) => setNewSection({ ...newSection, plannedEpld: e.target.value })}
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

      {/* Main Section Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Main Section</StyledTableCell>
              <StyledTableCell>Main Section Name</StyledTableCell>
              <StyledTableCell>Has Deleted</StyledTableCell>
              <StyledTableCell>Created Time</StyledTableCell>
              <StyledTableCell>Modified Time</StyledTableCell>
              <StyledTableCell>Planned Epld</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell> {/* Actions column for edit and delete */}
            </TableRow>
          </TableHead>
          <TableBody>
            {sections.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((section, index) => (
              <TableRow key={index}>
                <TableCell>{section.mainSection}</TableCell>
                <TableCell>{section.mainSectionName}</TableCell>
                <TableCell>{section.hasDeleted ? "Yes" : "No"}</TableCell>
                <TableCell>{section.createdTime}</TableCell>
                <TableCell>{section.modifiedTime}</TableCell>
                <TableCell>{section.plannedEpld}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <IconButton 
                      color="secondary" 
                      onClick={() => handleDeleteSection(section.mainSection)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton 
                      color="primary" 
                      onClick={() => handleEditSection(section)}
                    >
                      <EditIcon />
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
        count={sections.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default MainSectionTable;
