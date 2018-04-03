var mongoose = require ('mongoose');

// student schema

var studentSchema = mongoose.Schema({
  fistName: {
    type: String
  },
  lastName: {
    type: String
  },
  birthDate: {
    type: String
  },
  sex: {
    type: String
  }
});

var student = module.exports = mongoose.model("Student", studentSchema);
