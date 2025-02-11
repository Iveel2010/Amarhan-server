const { Schema, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const categorySchema = new Schema(
  {
    categoryName:{ type: String ,required: true},
    subCategory:[{type: Schema.Types.ObjectId, ref: "subCategory"}],
  },
  {
    timestamps: true,
  }
);


const categoryModel = mongoose.model("category", categorySchema);

module.exports = { categoryModel };
    // userName: { type: String},
    // post: [{ type: Schema.Types.ObjectId, ref: "post" }],
    // likedPosts:[{type: Schema.Types.ObjectId, ref: "post"}],