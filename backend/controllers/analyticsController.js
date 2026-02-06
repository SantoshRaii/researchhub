import Paper from "../models/Paper.js";

// Get Analytics Summary
export const getAnalytics = async (req, res) => {
  try {
    const papers = await Paper.find({ user: req.user._id });

    const totalPapers = papers.length;

    const fullyRead = papers.filter(
      (p) => p.readingStage === "Fully Read"
    ).length;

    const domainCount = {};
    const stageCount = {};

    papers.forEach((p) => {
      domainCount[p.domain] =
        (domainCount[p.domain] || 0) + 1;

      stageCount[p.readingStage] =
        (stageCount[p.readingStage] || 0) + 1;
    });

    res.json({
      totalPapers,
      fullyRead,
      domainCount,
      stageCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
