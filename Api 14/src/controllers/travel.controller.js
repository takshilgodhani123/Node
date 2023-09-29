const { travelService } = require("../services");

const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;
    const travel = await travelService.createTravel(reqBody);
    if (!travel) {
      throw new Error("Error creating travel");
    }
    res.status(200).json({
      success: true,
      message: "travel created successfully",
      data: {travel},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getTravellist = async (req, res) => {
  try {
    const getlist = await travelService.getTravellist(req, res);
    if (!getlist) {
      throw new Error("travel list found");
    }
    res.status(200).json({
      success: true,
      message: "get travel list successfully",
      data: {getlist},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getTravelDetails = async (req, res) => {
  try {
    const getDetails = await travelService.getTravelById(req.params.travelId);
    if (!getDetails) {
      throw new Error("travel not found!");
    }

    res.status(200).json({
      success: true,
      message: "travel details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** travel details update by id */
const updateDetails = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const travelExists = await travelService.getTravelById(travelId);
    if (!travelExists) {
      throw new Error("travel not found!");
    }

    await travelService.updateDetails(travelId, req.body);

    res
      .status(200)
      .json({ success: true, message: "travel details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteTravelById = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    if (!travelId) {
      throw new Error("travel not found !");
    }
    await travelService.deleteTravelById(travelId);
    res.status(200).json({
      success: true,
      message: "travel delete successfuly !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTravel,
  getTravellist,
  getTravelDetails,
  updateDetails,
  deleteTravelById
};
