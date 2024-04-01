const express = require("express");
const dongias = require("../controllers/dongia.controller");

const router = express.Router();

router.route("/")
    .get(dongias.findAll)
    .post(dongias.create)
    .delete(dongias.deleteAll);

router.route("/:id")
    .get(dongias.findOne)
    .patch(dongias.update)
    .delete(dongias.delete);

module.exports = router;