const { jewelryService } = require("../services");

const createJewelry = async (req, res) => {
  try {
    const reqBody = req.body;
    const jewelry = await jewelryService.createJewelry(reqBody)
    if (!jewelry) {
      throw new Error("Something went wrong , please try again or later !!");
    }
    res.status(200).json({
      success: true,
      message: "Successfully created a new jewelry",
      data: { jewelry },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getJewelryList = async (req, res) => {
  try {
    const getList = await jewelryService.getJewelryList(req, res);
    if (!getList) {
      throw new Error("jewelry list found");
    }
    res.status(200).json({
      success: true,
      message: "Get jewelry list successfully!",
      data: { getList },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


const getJewelryDetails = async (req, res) => {
  try {
    const getDetails = await jewelryService.getJewelryById(req.params.jewelryId);
    if (!getDetails) {
      throw new Error("jewelry not found!");
    }

    res.status(200).json({
      success: true,
      message: "jewelry details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const jewelryId = req.params.jewelryId;
    const jewelryExists = await jewelryService.getJewelryById(jewelryId);
    if (!jewelryExists) {
      throw new Error("jewelry not found!");
    }

    await jewelryService.updateDetails(jewelryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "jewelry details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteJewelryById = async (req, res) => {
  try {
    const jewelryId = req.params.jewelryId;
    if (!jewelryId) {
      throw new Error("jewelry not found !");
    }
    await jewelryService.deleteJewelryById(jewelryId)
    res.status(200).json({
        success: true,
        message: "jewelry delete successfully!",
      });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message,
      });
  }
};

module.exports = {
    createJewelry,
  getJewelryList,
  getJewelryDetails,
  updateDetails,
  deleteJewelryById
};
