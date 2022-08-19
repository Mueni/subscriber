var mongoose = require("mongoose");
var db = require("../db");

// create an schema
var subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  }
});

subscriberTable = mongoose.model("subscribers", subscriberSchema);

module.exports = {
  createData: function (inputData, callback) {
   subscriberData = new subscriberTable(inputData);
   subscriberData.save(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
  fetchData: function (callback) {
    var subscriberData = subscriberTable.find({});
   subscriberData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
  editData: function (editId, callback) {
    var subscriberData = subscriberTable.findById(editId);
   subscriberData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
  updateData: function (inputData, editId, callback) {
   subscriberData = subscriberTable.findByIdAndUpdate(editId, inputData);
   subscriberData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
  deleteData: function (deleteId, callback) {
   subscriberData = subscriberTable.findByIdAndDelete(deleteId);
   subscriberData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
};
