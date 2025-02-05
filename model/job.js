const jobSchema = new Schema(
    {
      postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
      company: { type: String, required: true },
      position: { type: String, required: true },
      salary: { type: Number, required: true },
      employmentType: { type: String, enum: ["full-time", "part-time", "contract", "internship"], required: true },
      experience: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  const Job = mongoose.model("Job", jobSchema);
  module.exports = { Job };
  