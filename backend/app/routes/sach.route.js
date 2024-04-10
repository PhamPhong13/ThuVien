const express = require("express");
const sachs = require("../controllers/sach.controller");

const router = express.Router();

router.route("/")
    .get(sachs.findAll)
    .post(sachs.create)
    .delete(sachs.deleteAll);

router.route("/:id")
    .get(sachs.findOne)
    .patch(sachs.update)
    .delete(sachs.delete);

router.route('/findByNXB/:id')
    .get(sachs.findByNXB);

router.route('/findByTen/:name')
    .get(sachs.findByName);

module.exports = router;