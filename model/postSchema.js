const { Schema, mongoose } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    postImage: [{ type: String, required: true }],
    category: {
      type: String,
      enum: [
        "real_estate", "car", "clothing", "job", "kids", "computer",
        "phone", "electronics", "home", "materials", "hobby",
        "health", "pets", "service"
      ],
      required: true
    },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    views: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = { Post };
