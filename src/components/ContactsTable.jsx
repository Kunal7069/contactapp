import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box, Typography } from '@mui/material';

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
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
                        {contacts.map((contact) => (
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
        </Paper>
    );
};

export default ContactsTable;
