const { busService } = require("../services");

/**create bus */
const createBus = async (req, res) => {
  try {
    const reqBody = req.body;
    const bus = await busService.createBus(reqBody);
    if (!bus) {
      throw new Error("Something went wrong , please try again or later !!");
    }
    res.status(200).json({
      success: true,
      message: "Bus created successfully",
      data: { bus },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** get bus list */
const getBuslist = async (req, res) => {
  try {
    const getlist = await busService.getBuslist(req, res);
    if(!getlist){
      throw  new Error('bus list found')
  }
    res.status(200).json({
      success: true,
      message: "Get Bus list successfully!",
      data: { getlist },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


const getBusDetails = async (req, res) => {
  try {
    const getDetails = await busService.getBusById(req.params.busId);
    if (!getDetails) {
      throw new Error("bus not found!");
    }

    res.status(200).json({
      success: true,
      message: "bus details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const busId = req.params.busId;
    const busExists = await busService.getBusById(busId);
    if (!busExists) {
      throw new Error("bus not found!");
    }

    await busService.updateDetails(busId, req.body);

    res
      .status(200)
      .json({ success: true, message: "bus details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** delete bus */
const deleteBus = async (req, res) => {
  try {
    const busId = req.params.busId;
    if (!busId) {
      throw new Error("Bus not found !");
    }
    await busService.deleteBus(busId);
    res.status(200).json({
      success: true,
      message: "Bus delete successfuly",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createBus,
  getBuslist,
  getBusDetails,
  updateDetails,
  deleteBus,
};
