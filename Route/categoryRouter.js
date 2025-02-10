const Route = require("express");
const categoryRouter = Route();
const { categoryModel } = require("../model/categorySchema");
const { subCategoryModel } = require("../model/subCategorySchema");
const { subSubCategoryModel } = require("../model/subSubCategorySchema");
const { subSubSubCategoryModel } = require("../model/subSubSubCategorySchema");
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
module.exports = categoryRouter;