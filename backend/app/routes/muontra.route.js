const express = require('express');
const muontra = require('../controllers/muontra.controller');

const router = express.Router();

router.route("/")
    .get(muontra.getAll)
    .post(muontra.create)
    .delete(muontra.deleteAll);

router.route("/:id")
    .get(muontra.findOne)
    .put(muontra.update)
    .delete(muontra.delete);
    
module.exports = router;