const Route = require("express");
const categoryRouter = Route();
const { categoryModel } = require("../model/categorySchema");
const { subCategoryModel } = require("../model/subCategorySchema");
const { subSubCategoryModel } = require("../model/subSubCategorySchema");
const { choosesModel } = require("../model/choosesSchema");
categoryRouter.post("/adminAddNewCategory", async (req, res) => {
    const { categoryName } = req.body;
    try {   
      const newCategory = await categoryModel.create({
        categoryName
      });

      res.json(newCategory);
    } catch (error) {
      res.send({ error });
      console.log(error);
    }
  });

  categoryRouter.post("/adminAddNewSubCategory", async (req, res) => {
    const { subCategoryName ,category} = req.body;
    try {
      const newSubCategory = await subCategoryModel.create({
        subCategoryName,category
      });
      await categoryModel.findByIdAndUpdate(category, {
        $addToSet: {
            subCategory: newSubCategory._id
        },
      });
      res.send(newSubCategory);
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  });

  categoryRouter.post("/adminAddNewSubSubCategory", async (req, res) => {
    const { subSubCategoryName ,subCategory} = req.body;
    try {
      const newSubSubCategory = await subSubCategoryModel.create({
        subSubCategoryName,subCategory
      });
      await subCategoryModel.findByIdAndUpdate(subCategory, {
        $addToSet: {
          subSubCategory: newSubSubCategory._id
        },
      });
      res.send(newSubSubCategory);
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  });
  categoryRouter.post("/adminAddNewSubSubCategoryChooses", async (req, res) => {
    const { choosesName, choosesOption, subSubCategory} = req.body;
    try {
      const newSubSubCategoryChooses = await choosesModel.create({
        subSubCategory,choosesOption,choosesName
      });
      await subSubCategoryModel.findByIdAndUpdate(subSubCategory, {
        $addToSet: {
          chooses: newSubSubCategoryChooses._id
        },
      });
      res.send(newSubSubCategoryChooses);
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  });

  categoryRouter.get("/adminGetSubCategory/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  console.log(categoryId, "hahahahahahaha");
  try {
    // const response = await postModel.findById(categoryId, "comments");
    const categoryData = await categoryModel.findById(categoryId).populate({
      path: "subCategory",
      select: "subCategoryName subSubCategory",
      },);
    res.send(categoryData);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
});
categoryRouter.get("/adminGetSubSubCategory/:subCategoryId", async (req, res) => {
  const { subCategoryId } = req.params;
  console.log(subCategoryId, "hahahahahahaha");
  try {
    // const response = await postModel.findById(subCategoryId, "comments");
    const subCategoryData = await subCategoryModel.findById(subCategoryId).populate({
      path: "subSubCategory",
      select: "chooses subSubCategoryName",
      },);
    res.send(subCategoryData);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
});
categoryRouter.get("/adminGetSubSubCategoryChooses/:SubSubCategoryId", async (req, res) => {
  const { SubSubCategoryId } = req.params;
  console.log(SubSubCategoryId, "hahahahahahaha");
  try {
    // const response = await postModel.findById(SubSubCategoryId, "comments");
    const subSubCategoryData = await subSubCategoryModel.findById(SubSubCategoryId).populate({
      path: "chooses",
      select: "choosesName choosesOption"
      },);
    res.send(subSubCategoryData);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
});
module.exports = categoryRouter;