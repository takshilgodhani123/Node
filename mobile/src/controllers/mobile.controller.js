const { mobileService } = require("../services");

const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;
    const mobile = await mobileService.createMobile(reqBody);
    if (!mobile) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Mobile created successfully",
      data: { mobile },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMobilelist = async (req, res) => {
  try {
    const getlist = await mobileService.getMobilelist(req, res);
    res.status(200).json({
      success: true,
      message: "get mobile list successfully",
      data: getlist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMobileDetails = async (req, res) => {
  try {
    const getDetails = await mobileService.getMobileById(req.params.mobileId);
    if (!getDetails) {
      throw new Error("mobile not found");
    }
    res.status(200).json({
      success: true,
      message: "category details get successfully!",
      data: { getDetails },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateDetails = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;

    const mobileExists = await mobileService.getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("mobile not found");
    }
    await mobileService.updateDetails(mobileId, req.body);
    res.status(200).json({
      success: true,
      message: "mobile details update successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const manageMobileStatus = async (req, res) => {
  try {
    const manageMobile = await mobileService.manageMobileStatus(
      req.params.mobileId
    );

    let resMessage =manageMobile.is_active
    ? "mobile can enable to sale"
    : "mobile can  not enable to sale"

    res.status(200).json({
        success:true,
        message:resMessage,
        data:manageMobile,
    })
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message,
      });
  }
};

const deleteMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.deleteMobile(mobileId);
    if (!mobileExists) {
      throw new Error("mobile not found!");
    }
    res.status(200).json({
      success: true,
      message: "mobile deleted succesfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createMobile,
  getMobilelist,
  getMobileDetails,
  updateDetails,
  manageMobileStatus,
  deleteMobile,
};
