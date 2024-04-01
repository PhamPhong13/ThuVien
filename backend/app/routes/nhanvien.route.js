const express = require('express');
const nhavien = require('../controllers/nhavien.controller');

const router = express.Router();

router.route("/")
    .get(nhavien.getAll)
    .post(nhavien.create)
    .delete(nhavien.deleteAll);

router.route("/:id")
    .get(nhavien.findOne)
    .put(nhavien.update)
    .delete(nhavien.delete);
    
module.exports = router;