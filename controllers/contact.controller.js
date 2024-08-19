const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');

exports.contactSubmit = asyncHandler(async (contactData) => {
    const { name, email, message } = contactData;

    if (!name || !email || !message) {
        throw new Error("All fields are required");
    }

    const newContact = new Contact({ name, email, message });

    await newContact.save();

    return { message: "Contact form submitted successfully", contact: newContact };
});

