const { Schema, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    userName: { type: String},
    email: { type: String},
    profileImage: { type: String },
    phoneNumber: { type: String }, 
    post: [{ type: Schema.Types.ObjectId, ref: "post" }],
    likedPosts:[{type: Schema.Types.ObjectId, ref: "post"}],
  },
  {
    timestamps: true,
  }
);


const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };
