const mongoose = require("mongoose");

const csatlakozas = () => {
    const MONGO_URI = process.env.MONGO_URI;
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Sikeres adatbázis csatlakozás!");
        })
        .catch((err) => {
            console.log("Valami nem sikerült!");
        });
};

module.exports = csatlakozas;