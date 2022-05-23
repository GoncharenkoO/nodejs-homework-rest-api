const { Contact } = require("../../models/Contact");
const { createError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  try {
    // const { _id } = req.user;
    // const result = await Contact.findByld(req.params.id, _id);
    // console.log(result);

    const _id = req.params.id;
    const owner = req.user._id;
    const result = await Contact.findOne({ _id, owner });
    console.log(result);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
