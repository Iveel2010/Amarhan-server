const realEstateSchema = new Schema(
    {
      postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
      propertyType: { type: String, enum: ["apartment", "house", "office", "land"], required: true },
      area: { type: Number, required: true },
      rooms: { type: Number, required: true },
      floor: { type: Number },
      yearBuilt: { type: Number },
      paymentType: { type: String, enum: ["cash", "mortgage"], required: true },
    },
    { timestamps: true }
  );
  
  const RealEstate = mongoose.model("RealEstate", realEstateSchema);
  module.exports = { RealEstate };
  