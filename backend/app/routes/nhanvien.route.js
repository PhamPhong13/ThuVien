const express = require("express");
const nhanviens = require("../controllers/nhanvien.controller");

const router = express.Router();

router.route("/")
    .get(nhanviens.findAll)
    .post(nhanviens.create)
    .delete(nhanviens.deleteAll);

router.route("/:id")
    .get(nhanviens.findOne)
    .patch(nhanviens.update)
    .delete(nhanviens.delete);

module.exports = router;