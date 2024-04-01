const express = require("express");
const muontras = require("../controllers/muontra.controller");

const router = express.Router();

router.route("/")
    .get(muontras.findAll)
    .post(muontras.create)
    .delete(muontras.deleteAll);

router.route("/:id")
    .get(muontras.findOne)
    .patch(muontras.update)
    .delete(muontras.delete);

module.exports = router;