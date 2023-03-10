const asyncHandler = require("express-async-handler");
const Competence = require("../models/competencesModel");
const Type = require("../models/typesModel");

const getCompetences = asyncHandler(async (req, res) => {
  let competences = await Competence.find({});

  for (const competence in competences) {
    let type = await Type.findById(competences[competence].type);
    competences[competence].type = type; 
  }

  res.status(200).json(competences);
});

const getCompetence = asyncHandler(async (req, res) => {
  const competence = await Competence.findById(req.params.id);
  let type = await Type.findById(pokemon.type);
  if (competence) {
    competence.type = type;
    res.status(200).json(competence);
  } else {
    res.status(404);
    throw new Error("Ability not found");
  }
});

const addCompetence = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please write a type");
  }

  let competenceType = await Type.findById(req.body.type);

  const competence = await Competence.create({
    name: req.body.name,
    description: req.body.description,
    power: req.body.power,
    precision: req.body.precision,
    ppMax: req.body.ppMax,
    type: competenceType
  });
  //res.json({ message: `Add goal ${req.body.text}`  })
  res.status(200).json(competence);
});

const updateCompetence = asyncHandler(async (req, res) => {
  res.json({ message: `Update Ability ${req.params.id}` });
});

const deleteCompetence = asyncHandler(async (req, res) => {
  const competence = await Competence.findById(req.params.id);
  if (competence) {
    await competence.remove();
    res.json({ message: "Ability removed" });
  } else {
    res.status(404);
    throw new Error("Ability not found");
  }

  res.status(200).json(competence);
});

module.exports = {
  getCompetences,
  getCompetence,
  addCompetence,
  updateCompetence,
  deleteCompetence,
};
