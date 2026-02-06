import mongoose from "mongoose";

const paperSchema = new mongoose.Schema(
  {
    // Kis user ka paper hai
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // Paper title
    title: {
      type: String,
      required: true
    },

    // First author name
    firstAuthor: {
      type: String,
      required: true
    },

    // Domain of research
    domain: {
      type: String,
      required: true
    },

    // Reading progress stage
    readingStage: {
      type: String,
      enum: [
        "Abstract Read",
        "Introduction Done",
        "Methodology Done",
        "Results Analyzed",
        "Fully Read",
        "Notes Completed"
      ],
      default: "Abstract Read"
    },

    // Impact level
    impactScore: {
      type: String,
      enum: ["High Impact", "Medium Impact", "Low Impact", "Unknown"],
      default: "Unknown"
    },

    // Number of citations
    citations: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Paper = mongoose.model("Paper", paperSchema);

export default Paper;
