const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    vonalkod: {
        type: String,
        required: true,
        unique: true
    },
    fajta: {
        type: String,
        required: true
    },
    leiras: {
        type: String,
        required: true
    },
    ar: {
        type: Number,
        required: true
    },
    kep: {
        type: String,
        required: true
    }
}, { timestamps: true });

const FoodModel = mongoose.model("food", FoodSchema);

module.exports = FoodModel;