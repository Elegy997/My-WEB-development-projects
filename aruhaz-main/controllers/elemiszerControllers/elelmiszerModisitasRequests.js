const Food = require("../../models/Food");
const createError = require("http-errors");

const modositOldalLekeres = (req, res, next) => {
    res.render("elelmiszerModosit");
};

// const elemiszerFeltoltes = async (req, res, next) => {
//     try {
//         const body = req.body;
//         console.log(body);
//         const newFood = new Food(body);
//         const kaja = await newFood.save();
//         res.redirect("/elelmiszer");
//     } catch (error) {
//         next(createError.UnprocessableEntity("Valamit nem töltöttél ki"));
//     }
// }

module.exports = { modositOldalLekeres };