const express = require('express');
const dongia = require('../controllers/dongia.controller');

const router = express.Router();

router.route("/")
    .get(dongia.getAll)
    .post(dongia.create)
    .delete(dongia.deleteAll);

router.route("/:id")
    .get(dongia.findOne)
    .put(dongia.update)
    .delete(dongia.delete);
    
module.exports = router;