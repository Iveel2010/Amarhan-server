const { Schema, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const subSubSubCategorySchema = new Schema(
  {
    subSubCategory:{ type: Schema.Types.ObjectId, ref: "subSubCategory" ,required: true },
    userName:{ type: String, },
    email:{ type: String},  
    phoneNumber:{ type: String , },
    title: { type: String,  },
    description: { type: String, },
   postImage: [{ type: String,  }],
   postPlanImage: [{ type: String,}],

   price:{ type: String},
   priceIsRight:{ type: Boolean},
  },
  {
    timestamps: true,
  }
);


const subSubSubCategoryModel = mongoose.model("subSubSubCategory", subSubSubCategorySchema);

module.exports = { subSubSubCategoryModel };
    // userName: { type: String},
    // post: [{ type: Schema.Types.ObjectId, ref: "post" }],
    // likedPosts:[{type: Schema.Types.ObjectId, ref: "post"}],