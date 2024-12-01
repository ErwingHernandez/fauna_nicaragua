const express = require("express");

const router = express.Router();

const { getFaunas, getFauna, createFauna, updateFauna, deleteFauna} = require('../controllers/faunaController.js');
const { sendSuggestion, getSuggestions} = require ('../controllers/sugestionController.js')

router.get("/GetAllFaunas", getFaunas);
router.get("/GeatAFauna/:id", getFauna);
router.get("/Allsugestion", getSuggestions);
router.post("/CreateFauna", createFauna);

router.post("/Sendsugestion", sendSuggestion);
router.put("/UpdateFauna/:id", updateFauna);
router.delete("/DeleteFauna/:id", deleteFauna);


module.exports = router;