const Robe = require("../../models/Robe");
const createError = require("http-errors");

const feltoltOldalLekeres = (req, res, next) => {
    res.render("ruhaFeltolt");
};

const ruhaFeltoltes = async (req, res, next) => {
    try {
        const body = req.body;

        const newRobe = new Robe(body);
        const clothes = await newRobe.save();
        res.redirect("/ruha");
    } catch (error) {
        next(createError.UnprocessableEntity("Valamit nem töltöttél ki"));
    }
}

module.exports = { feltoltOldalLekeres, ruhaFeltoltes };