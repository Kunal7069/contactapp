import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box, Typography, TablePagination } from '@mui/material';

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(2); // Set to 2 contacts per page
    const [sortedContacts, setSortedContacts] = useState([]);

    const sortContacts = (contacts) => {
        return contacts.sort((a, b) => {
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
            return 0;
        });
    };

    // Handle change in page
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle change in rows per page
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    // Update sortedContacts on contacts change
    React.useEffect(() => {
        setSortedContacts(sortContacts(contacts));
    }, [contacts]);

    return (
        <Paper sx={{ padding: 2, boxShadow: 3 }}>
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h4" align="center" sx={{ color: 'primary.main' }}>
                    Contacts List
                </Typography>
            </Box>
            <TableContainer sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light' }}>First Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light' }}>Last Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light' }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light' }}>Phone</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light' }}>Company</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light' }}>Job Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedContacts
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((contact) => (
                                <TableRow
                                    key={contact._id}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'primary.light',
                                        },
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>{contact.firstName}</TableCell>
                                    <TableCell>{contact.lastName}</TableCell>
                                    <TableCell>{contact.email}</TableCell>
                                    <TableCell>{contact.phone}</TableCell>
                                    <TableCell>{contact.company}</TableCell>
                                    <TableCell>{contact.jobTitle}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => onEdit(contact)}
                                            sx={{
                                                marginRight: 1,
                                                '&:hover': {
                                                    backgroundColor: 'primary.dark',
                                                },
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => onDelete(contact._id)}
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'error.light',
                                                },
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination Component */}
            <TablePagination
                rowsPerPageOptions={[2, 5, 10]} // Show options for 2, 5, 10 rows per page
                component="div"
                count={contacts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default ContactsTable;
