// Modulok kezelése
const express = require("express");
const { modositOldalLekeres } = require("../controllers/elemiszerControllers/elelmiszerModisitasRequests");
const { feltoltOldalLekeres, elemiszerFeltoltes } = require("../controllers/elemiszerControllers/elemiszerFeltoltesRequests");
const { elemiszerekMegjelenitese, egyElemiszerMegjelenitese } = require("../controllers/elemiszerControllers/elemiszerRequests");

const router = express.Router();

router.get("/", elemiszerekMegjelenitese);
router.get("/feltoltes", feltoltOldalLekeres);
router.get("/modositas/:vonalkod", modositOldalLekeres);
router.get("/:vonalkod", egyElemiszerMegjelenitese);

router.post("/feltoltes", elemiszerFeltoltes);

module.exports = router;