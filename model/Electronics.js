const electronicsSchema = new Schema(
    {
      postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
      brand: { type: String, required: true },
      model: { type: String },
      condition: { type: String, enum: ["new", "used"], required: true },
      warranty: { type: Boolean, default: false },
    },
    { timestamps: true }
  );
  
  const Electronics = mongoose.model("Electronics", electronicsSchema);
  module.exports = { Electronics };
  