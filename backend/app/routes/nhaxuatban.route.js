const express = require("express");
const nhaxuatbans = require("../controllers/nhaxuaban.controller");

const router = express.Router();

router.route("/")
    .get(nhaxuatbans.findAll)
    .post(nhaxuatbans.create)
    .delete(nhaxuatbans.deleteAll);

router.route("/:id")
    .get(nhaxuatbans.findOne)
    .patch(nhaxuatbans.update)
    .delete(nhaxuatbans.delete);

module.exports = router;