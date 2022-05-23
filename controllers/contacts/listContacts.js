const { Contact } = require("../../models/Contact");

const listContacts = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const { _id } = req.user;
    const skip = (page - 1) * limit;
    const result = await Contact.find(
      { owner: _id },
      {
        skip,
        limit: Number(limit),
      }
    ).populate("owner", "email");
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
