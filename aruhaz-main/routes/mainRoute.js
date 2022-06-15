const { getRequest } = require("../controllers/mainControllers/mainGetRequests");

const router = require("express").Router();

router.get("/", getRequest);

module.exports = router;