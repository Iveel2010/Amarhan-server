const { Schema, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const choosesSchema = new Schema(
  {
    choosesName:{ type: String, required: true},
    choosesOption:[{ type: String , required: true}],
    subSubCategory:{ type: Schema.Types.ObjectId, ref: "subSubCategory" ,required: true },
  },
  {
    timestamps: true,
  }
);


const choosesModel = mongoose.model("chooses", choosesSchema);

module.exports = { choosesModel };
    // userName: { type: String},
    // post: [{ type: Schema.Types.ObjectId, ref: "post" }],
    // likedPosts:[{type: Schema.Types.ObjectId, ref: "post"}],