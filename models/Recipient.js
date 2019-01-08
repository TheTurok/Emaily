const mongoose = require('mongoose');
const {Scheme} = mongoose;

const recipientSchema = newSchema({
  email: String,
  respond: {type: Boolean, default: false}
});

module.exports = recipientSchema;
