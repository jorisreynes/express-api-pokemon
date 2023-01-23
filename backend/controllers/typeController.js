const asyncHandler = require("express-async-handler");

const Type = require("../models/typesModel");

const getTypes = asyncHandler(async (req, res) => {
  let types = await Type.find({});
  res.status(200).json(types);
});

const getType = asyncHandler(async (req, res) => {
  const type = await Type.findById(req.params.id);
  if (type) {
    res.status(200).json(type);
  } else {
    res.status(404);
    throw new Error("Type not found");
  }
});

const addType = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please write a type");
  }
  const type = await Type.create({
    name: req.body.name
  });
  //res.json({ message: `Add goal ${req.body.text}`  })
  res.status(200).json(type);
});

const updateType = asyncHandler(async (req, res) => {
  res.json({ message: `Update Type ${req.params.id}` });
});

const deleteType = asyncHandler(async (req, res) => {
  const type = await Type.findById(req.params.id);
  if (type) {
    await type.remove();
    res.json({ message: "Type removed" });
  } else {
    res.status(404);
    throw new Error("Type not found");
  }

  res.status(200).json(type);
});

module.exports = {
  getTypes,
  getType,
  addType,
  updateType,
  deleteType,
};
