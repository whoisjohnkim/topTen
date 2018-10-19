const router = require("express").Router();
const listController = require("../..controllers/listController.js");

// Matches with "/api/list/"
router.route("/")
    .get(listController.findAll)
    .post(listController.create);

router.route("/:id")
    .get(listController.findbyId)
    .put(listController.update)
    .delete(listController.remove);

module.exports = router;