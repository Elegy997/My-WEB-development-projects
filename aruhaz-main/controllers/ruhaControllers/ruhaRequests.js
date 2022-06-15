const Robe = require("../../models/Robe");

const ruhakMegjelenitese = async (req, res, next) => {
    try {
        const robes = await Robe.find();
        // res.send(foods);
        res.render("ruha", { robes });
    } catch (error) {
        console.log(error.message);
    }
}

const egyRuhaMegjelenitese = async (req, res, next) => {
    try {
        const vonalkod = req.params.vonalkod;
        const ruha = await Robe.findOne({ vonalkod });

        res.render("egyRuha", { ruha });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { ruhakMegjelenitese, egyRuhaMegjelenitese };