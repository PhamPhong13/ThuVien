const express = require('express');
const nguoidung = require('../controllers/nguoidung.controller');

const router = express.Router();

router.route("/")
    .get(nguoidung.getAll)
    .post(nguoidung.create)
    .delete(nguoidung.deleteAll);

router.route("/:id")
    .get(nguoidung.findOne)
    .put(nguoidung.update)
    .delete(nguoidung.delete);
    
module.exports = router;