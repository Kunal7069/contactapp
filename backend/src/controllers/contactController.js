const Contact = require('../models/contact');

// Create a new contact
const createContact = async (req, res) => {
    try {
        const { phone } = req.body;
        const existingContact = await Contact.findOne({ phone });
        if (existingContact) {
            return res.status(400).json({ message: 'A contact with this phone number already exists' });
        }
        const contact = new Contact(req.body);
        await contact.save();

        res.status(201).json({ message: 'Contact created successfully', contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a contact
const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'Contact updated successfully', contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a contact
const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createContact, getContacts, updateContact, deleteContact };
