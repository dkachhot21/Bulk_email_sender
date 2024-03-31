const { default: mongoose } = require("mongoose");

const emailSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true },
    data:String
});

module.exports = mongoose.model("emails", emailSchema);