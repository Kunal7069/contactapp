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
        <Container maxWidth="lg">
            <Paper sx={{ padding: 4, boxShadow: 3 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Contact Management
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ mb: 4 }}>
                    <ContactForm
                        onSubmit={handleAddOrUpdateContact}
                        currentContact={currentContact}
                        setCurrentContact={setCurrentContact}
                    />
                </Box>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={12}>
                        <ContactsTable
                            contacts={contacts}
                            onEdit={setCurrentContact}
                            onDelete={handleDeleteContact}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default ContactManagement;
