// Dependencies - függőségek, modulok importálása
require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const ejs = require("ejs");
const csatlakozas = require("./utils/dbConnection");

// Szerver létrehozása
const app = express();
csatlakozas();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

// Route-ok
app.use("/", require("./routes/mainRoute"));
app.use("/elelmiszer", require("./routes/elemiszerRoute"));
app.use("/ruha", require("./routes/ruhaRoute"));

// Middleware-k
// Nem létező route-ok kezelése
app.use((req, res, next) => {
    // next(createError(404, "Nem találom ezt az oldalt!"));
    next(createError.NotFound("Nem találom ezt az oldalt!"));
});

app.set("view engine", "ejs");

// Hibakezelés
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("404", {
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`A szerver fut: http://localhost:${PORT}`);
});