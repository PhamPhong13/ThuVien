const express = require("express");
const nguoidungs = require("../controllers/nguoidung.controller");

const router = express.Router();

router.route("/")
    .get(nguoidungs.findAll)
    .post(nguoidungs.create)
    .delete(nguoidungs.deleteAll);

router.route("/:id")
    .get(nguoidungs.findOne)
    .patch(nguoidungs.update)
    .delete(nguoidungs.delete);

module.exports = router;