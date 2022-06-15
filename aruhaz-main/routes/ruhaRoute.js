const express = require("express");
const { feltoltOldalLekeres, ruhaFeltoltes } = require("../controllers/ruhaControllers/ruhaFeltoltesRequests");
const { ruhakMegjelenitese, egyRuhaMegjelenitese } = require("../controllers/ruhaControllers/ruhaRequests");

const router = express.Router();

router.get("/", ruhakMegjelenitese);
router.get("/:vonalkod", egyRuhaMegjelenitese);

router.get("/feltoltes", feltoltOldalLekeres);
router.post("/feltoltes", ruhaFeltoltes);

module.exports = router;