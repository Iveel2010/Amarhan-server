const carSchema = new Schema(
    {
      postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
      brand: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      mileage: { type: Number, required: true },
      engine: { type: String, required: true },
      fuelType: { type: String, enum: ["petrol", "diesel", "electric", "hybrid"], required: true },
      transmission: { type: String, enum: ["manual", "automatic"], required: true },
    },
    { timestamps: true }
  );
  
  const Car = mongoose.model("Car", carSchema);
  module.exports = { Car };
  