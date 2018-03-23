const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveyRecipientSchema = new Schema({
  survey: String,
  recipient: String
});

mongoose.model("surveyRecipients", surveyRecipientSchema);
