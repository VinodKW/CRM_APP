import mongoose from 'mongoose'; 
import { ContactSchema } from '../models/crmModel.js';


const Contact = mongoose.model('Contact', ContactSchema); 

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body); 

    newContact.save((err, contact) => {
        if (err) {
            res.send(err); 
        } 

        res.json(contact); 
    });
}

export const getContacts = (req, res) => {

    Contact.find ({}, (err, contact) => {
        if (err) {
            res.send(err); 
        } 

        res.json(contact); 
    });
}

export const getContactWithID = (req, res) => {

    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err); 
        } 
        res.json(contact); 
    });
}

export const updateContact = (req, res) => {

    Contact.findOneAndUpdate({ _id: req.params.ContactID }, req.body, {new: true, useFindAndModify: false  }, (err, contact) => {
        if (err) {
            res.send(err); 
        } 
        res.json(contact); 
    });
}

export const deleteContact = (req, res) => {

    Contact.remove({ _id: req.params.ContactID }, (err, contact) => {
        if (err) {
            res.send(err); 
        } 
        res.json({nessage: 'successfully deleted contact'}); 
    });
}