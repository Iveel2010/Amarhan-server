const { Schema, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const subSubCategorySchema = new Schema(
  {
    subSubCategoryName:{ type: String , required: true},
    subCategory:{ type: Schema.Types.ObjectId, ref: "subCategory" ,required: true },
    chooses:[{ type: Schema.Types.ObjectId, ref: "chooses" }],
  },
  {
    timestamps: true,
  }
);


const subSubCategoryModel = mongoose.model("subSubCategory", subSubCategorySchema);

module.exports = { subSubCategoryModel };
    // userName: { type: String},
    // post: [{ type: Schema.Types.ObjectId, ref: "post" }],
    // likedPosts:[{type: Schema.Types.ObjectId, ref: "post"}],