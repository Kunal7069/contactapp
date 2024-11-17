import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchContacts = async () => axios.get(`${API_BASE_URL}/contacts`);
export const addContact = async (contact) => axios.post(`${API_BASE_URL}/contacts`, contact);
export const updateContact = async (id, contact) => axios.put(`${API_BASE_URL}/contacts/${id}`, contact);
export const deleteContact = async (id) => axios.delete(`${API_BASE_URL}/contacts/${id}`);
