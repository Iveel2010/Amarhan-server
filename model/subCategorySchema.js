const { Schema, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const subCategorySchema = new Schema(
  {
    subCategoryName:{ type: String , required: true},
    category:{ type: Schema.Types.ObjectId, ref: "category" ,required: true },
    subSubCategory:[{type: Schema.Types.ObjectId, ref: "subSubCategory"}]
  },
  {
    timestamps: true,
  }
);


const subCategoryModel = mongoose.model("subCategory", subCategorySchema);

module.exports = { subCategoryModel };
    // userName: { type: String},
    // post: [{ type: Schema.Types.ObjectId, ref: "post" }],
    // likedPosts:[{type: Schema.Types.ObjectId, ref: "post"}],