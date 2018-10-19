var mongoose = require("mongoose");

// Saves a reference to the Schema constructor
var Schema = mongoose.Schema;

var ListSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        unique: false
    },
    list: {
        type: Array,
        required: true
    }
});

// Create model for the above schema
var List = mongoose.model("List", ListSchema);

// Export the List model
module.exports = List;