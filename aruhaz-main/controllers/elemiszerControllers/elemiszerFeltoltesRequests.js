const Food = require("../../models/Food");
const createError = require("http-errors");

const feltoltOldalLekeres = (req, res, next) => {
    res.render("elemiszerFeltolt");
};

const elemiszerFeltoltes = async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const newFood = new Food(body);
        const kaja = await newFood.save();
        res.redirect("/elelmiszer");
    } catch (error) {
        next(createError.UnprocessableEntity("Valamit nem töltöttél ki"));
    }
}

module.exports = { feltoltOldalLekeres, elemiszerFeltoltes };