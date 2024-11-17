import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Paper, CircularProgress } from '@mui/material';

const ContactForm = ({ onSubmit, currentContact, setCurrentContact }) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentContact) setContact(currentContact);
    }, [currentContact]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await onSubmit(contact);
            setContact({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                jobTitle: '',
            });
            setCurrentContact(null);
        } catch (error) {
            console.error('Error saving contact:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 4, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 3, color: 'primary.main' }}>
                {currentContact ? 'Update Contact' : 'Add New Contact'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleChange}
                    required
                    sx={{ backgroundColor: 'grey.100' }}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleChange}
                    required
                    sx={{ backgroundColor: 'grey.100' }}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                    sx={{ backgroundColor: 'grey.100' }}
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    required
                    sx={{ backgroundColor: 'grey.100' }}
                />
                <TextField
                    label="Company"
                    name="company"
                    value={contact.company}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'grey.100' }}
                />
                <TextField
                    label="Job Title"
                    name="jobTitle"
                    value={contact.jobTitle}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'grey.100' }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={{ marginTop: 2, backgroundColor: 'primary.main', color: 'white', '&:hover': { backgroundColor: 'primary.dark' } }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : currentContact ? 'Update Contact' : 'Add Contact'}
                </Button>
            </Box>
        </Paper>
    );
};

export default ContactForm;
