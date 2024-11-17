import React, { useState, useEffect } from 'react';
import { fetchContacts, addContact, updateContact, deleteContact } from '../services/api';
import ContactForm from '../components/ContactForm';
import ContactsTable from '../components/ContactsTable';
import { Container, Typography, Box, Paper, Divider, Grid } from '@mui/material';

const ContactManagement = () => {
    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        try {
            const { data } = await fetchContacts();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const handleAddOrUpdateContact = async (contact) => {
        try {
            if (currentContact) {
                await updateContact(currentContact._id, contact);
            } else {
                await addContact(contact);
            }
            loadContacts();
        } catch (error) {
            console.error('Error saving contact:', error);
        }
    };

    const handleDeleteContact = async (id) => {
        try {
            await deleteContact(id);
            loadContacts();
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    return (
        <Container maxWidth="xl">
            <Paper sx={{ padding: 0.2, boxShadow: 3 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Contact Management
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={2}> 
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 2 }}> 
                            <ContactForm
                                onSubmit={handleAddOrUpdateContact}
                                currentContact={currentContact}
                                setCurrentContact={setCurrentContact}
                            />
                        </Box>
                    </Grid>

                   
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 2, overflowX: 'auto' }}> 
                            <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                                <ContactsTable
                                    contacts={contacts}
                                    onEdit={setCurrentContact}
                                    onDelete={handleDeleteContact}
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default ContactManagement;
