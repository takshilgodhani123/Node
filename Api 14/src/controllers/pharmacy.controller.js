const { pharmacyService } = require("../services");

const createPharmacy = async (req, res) => {
  try {
    const reqBody = req.body;
    const pharmacy = await pharmacyService.createPharmacy(reqBody);
    if (!pharmacy) {
      throw new Error("Error creating pharmacy");
    }
    res.status(200).json({
      success: true,
      message: "pharmacy created successfully",
      data: { pharmacy },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getPharmacylist = async (req, res) => {
  try {
    const getlist = await pharmacyService.getPharmacylist(req, res);
    if (!getlist) {
      throw new Error("pharmacy list found");
    }
    res.status(200).json({
      success: true,
      message: "get pharmacy list successfully",
      data: { getlist },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


const getPharmacyDetails = async (req, res) => {
  try {
    const getDetails = await pharmacyService.getPharmacyById(req.params.pharmacyId);
    if (!getDetails) {
      throw new Error("pharmacy not found!");
    }

    res.status(200).json({
      success: true,
      message: "pharmacy details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
    if (!pharmacyExists) {
      throw new Error("pharmacy not found!");
    }

    await pharmacyService.updateDetails(pharmacyId, req.body);

    res
      .status(200)
      .json({ success: true, message: "pharmacy details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deletePharmacyById = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    if (!pharmacyId) {
      throw new Error("pharmacy not found !");
    }
    await pharmacyService.deletePharmacyById(pharmacyId);
    res.status(200).json({
      success: true,
      message: "pharmacy delete successfuly !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPharmacy,
  getPharmacylist,
  getPharmacyDetails,
  updateDetails,
  deletePharmacyById,
};
