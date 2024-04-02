const { default: mongoose } = require("mongoose");

const emailSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    data: { type: String, required: true }
});

module.exports = mongoose.model("email", emailSchema);