const mongoose = require('mongoose');
const {Scheme} = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = newSchema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: {type: Number, default: 0},
  no: {type:NUmber, default: 0}
});

mongoose.model('surveys', surveySchema);
