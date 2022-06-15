const mongoose = require("mongoose");

const RobeSchema = new mongoose.Schema({
    vonalkod: {
        type: String,
        // required: true,
        unique: true
    },
    fajta: {
        type: String,
        // required: true
    },
    leiras: {
        type: String,
        // required: true
    },
    ar: {
        type: Number,
        // required: true
    },
    meret: {
        type: Number,
        // required: true
    },
    szin: {
        type: String,
        // required: true
    },
    kep: {
        type: String,
        // required: true
    }
}, { timestamps: true });

const RobeModel = mongoose.model("robe", RobeSchema);

module.exports = RobeModel;