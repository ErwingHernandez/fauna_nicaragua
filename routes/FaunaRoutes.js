const express = require("express");

const router = express.Router();

const { getFaunas, getFauna, createFauna, updateFauna, deleteFauna } = require('../controllers/faunaController.js');

router.get("/", getFaunas);
router.get("/:id", getFauna);
router.post("/", createFauna);
router.put("/:id", updateFauna);
router.delete("/:id", deleteFauna);

module.exports = router;