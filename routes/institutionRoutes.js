const institutionRoutes = require("express").Router();
const Institution  = require("../models/institutionModel");
const asyncHandler = require("express-async-handler");

 //GETALL
 institutionRoutes.get("/", async (req, res) => {
  try {
    let data = await Institution.find()
    res
    .status(200)
    .send({ msg: "All Insitutions", data });
    if (!data) {
    res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
  });
  

// GET SINGLE institution
institutionRoutes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const institution = await Institution.findById(req.params.id);
    if (institution) {
      res.json(institution);
    } else {
      res.status(404);
      throw new Error("institution not Found");
    }
  })
);

module.exports = institutionRoutes;