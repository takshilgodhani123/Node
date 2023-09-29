const { categoryService } = require("../services");

/** create category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Category create successfully!",
      data: { category },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get Category list */
const getCategoryList = async (req, res) => {
  try {
    const getList = await categoryService.getCategoryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get Category list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getCategoryDetails=async(req,res)=>{
  try {
    const getDetails=await categoryService.getCategoryById(req.params.categoryId)
    if(!getDetails){
      throw  new Error('Not category Found')
    }

    res.status(200).json(({
      success:true,
      message:"category details get successfully!",
      date:{getDetails}
    }))
  } catch (error) {
    res.status(400).json({
      success :false ,
      message:error.message
    })
  }
}

const updateDetails =async (req,res)=>{
  try {
    const categoryId =req.params.categoryId
    const categoryExists=await categoryService.getCategoryById(categoryId);
    if(!categoryExists){
      throw  new Error('Not category Found')
    }
    await categoryService.updateDetails(categoryId,req.body)

    res.status(200).json({
      success:true,
      message:"category details update successfully!"
    })
  } catch (error) {
     res.status(400).json({
      success :false ,
      message :error.message
     })
  }
}


/** Delete Category */
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryExists = await categoryService.getCategoryById(categoryId);
    if (!categoryExists) {
      throw new Error("category not found!");
    }

    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createCategory,
  getCategoryList,
  getCategoryDetails,
  updateDetails,
  deleteCategory,
};
