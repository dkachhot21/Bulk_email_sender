const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    data: { type: String, required: true }
});

const Email = mongoose.model("email", emailSchema);
module.exports = Email;