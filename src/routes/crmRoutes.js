import {addNewContact, 
        getContacts, 
        getContactWithID, 
        updateContact, 
        deleteContact
} from '../controllers/crmController.js'; 

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')

        // get a specific Contact
        .get(getContactWithID)

        // for updation
        .put(updateContact)

        // deleting a specific contacts
        .delete(deleteContact);

}

export default routes; 