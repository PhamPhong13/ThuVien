const express = require("express");
const docgias = require("../controllers/docgia.controller");

const router = express.Router();

router.route("/")
    .get(docgias.findAll)
    .post(docgias.create)
    .delete(docgias.deleteAll);

router.route("/:id")
    .get(docgias.findOne)
    .patch(docgias.update)
    .delete(docgias.delete);

module.exports = router;