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

const SubSectionTable = () => {
  const [subSections, setSubSections] = useState([]); // State to store subsection data
  const [newSubSection, setNewSubSection] = useState({
    subSection: "",
    hasDeleted: false,
    createdTime: "",
    modifiedTime: "",
    plannedEpld: ""
  }); // State for new subsection input
  const [editingSubSection, setEditingSubSection] = useState(null); // State to track the subsection being edited
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch initial subsection data (mocked for demonstration)
  useEffect(() => {
    const initialData = [
      {
        subSection: 'Subsection A',
        hasDeleted: false,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '2024-12-31'
      },
      {
        subSection: 'Subsection B',
        hasDeleted: false,
        createdTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        plannedEpld: '2024-11-30'
      },
    ];
    setSubSections(initialData);
  }, []);

  // Handle adding a new subsection
  const handleAddSubSection = () => {
    const newSubSectionData = {
      ...newSubSection,
      createdTime: new Date().toISOString(), // Set created time
      modifiedTime: new Date().toISOString() // Set modified time
    };
    setSubSections([...subSections, newSubSectionData]);
    resetNewSubSection();
  };

  // Handle editing a subsection
  const handleEditSubSection = (subSection) => {
    setEditingSubSection(subSection);
    setNewSubSection({ ...subSection });
  };

  // Handle saving the edited subsection
  const handleSaveEdit = () => {
    const updatedSubSections = subSections.map(subSection =>
      subSection.subSection === editingSubSection.subSection ? { ...newSubSection, modifiedTime: new Date().toISOString() } : subSection
    );
    setSubSections(updatedSubSections);
    resetNewSubSection();
    setEditingSubSection(null);
  };

  // Handle deleting a subsection
  const handleDeleteSubSection = (subSectionName) => {
    setSubSections(subSections.filter(subSection => subSection.subSection !== subSectionName));
  };

  // Reset new subsection input
  const resetNewSubSection = () => {
    setNewSubSection({
      subSection: "",
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
      {/* Form for adding/editing subsections */}
      <div className="mb-4">
        <TextField
          label="Subsection"
          variant="outlined"
          value={newSubSection.subSection}
          onChange={(e) => setNewSubSection({ ...newSubSection, subSection: e.target.value })}
          className="mr-2"
        />
        <TextField
          label="Has Deleted"
          type="checkbox"
          checked={newSubSection.hasDeleted}
          onChange={(e) => setNewSubSection({ ...newSubSection, hasDeleted: e.target.checked })}
          className="mr-2"
        />
        <TextField
          label="Planned Epld"
          variant="outlined"
          value={newSubSection.plannedEpld}
          onChange={(e) => setNewSubSection({ ...newSubSection, plannedEpld: e.target.value })}
          className="mr-2"
        />
        {editingSubSection ? (
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddSubSection}>
            Add Subsection
          </Button>
        )}
      </div>

      {/* Subsection Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Subsection</StyledTableCell>
              <StyledTableCell>Has Deleted</StyledTableCell>
              <StyledTableCell>Created Time</StyledTableCell>
              <StyledTableCell>Modified Time</StyledTableCell>
              <StyledTableCell>Planned Epld</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell> {/* Added Actions header */}
            </TableRow>
          </TableHead>
          <TableBody>
            {subSections.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((subSection, index) => (
              <TableRow key={index}>
                <TableCell>{subSection.subSection}</TableCell>
                <TableCell>{subSection.hasDeleted ? "Yes" : "No"}</TableCell>
                <TableCell>{subSection.createdTime}</TableCell>
                <TableCell>{subSection.modifiedTime}</TableCell>
                <TableCell>{subSection.plannedEpld}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <IconButton 
                      color="secondary" 
                      onClick={() => handleDeleteSubSection(subSection.subSection)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton 
                      color="primary" 
                      onClick={() => handleEditSubSection(subSection)}
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
        count={subSections.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default SubSectionTable;
